import { ItemView, WorkspaceLeaf, setIcon } from "obsidian";
import OllamaPlugin from "./main";

export const VIEW_TYPE_OLLAMA = "ollama-chat-view";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export class OllamaView extends ItemView {
  private plugin: OllamaPlugin;
  private chatContainerEl: HTMLElement;
  private inputEl: HTMLTextAreaElement;
  private chatContainer: HTMLElement;
  private messages: Message[] = [];
  private isProcessing: boolean = false;
  private historyLoaded: boolean = false;

  constructor(leaf: WorkspaceLeaf, plugin: OllamaPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getViewType(): string {
    return VIEW_TYPE_OLLAMA;
  }

  getDisplayText(): string {
    return "Ollama Chat";
  }

  async onOpen(): Promise<void> {
    // Create main container
    this.chatContainerEl = this.contentEl.createDiv({ cls: "ollama-container" });
    
    // Create chat messages container
    this.chatContainer = this.chatContainerEl.createDiv({ cls: "ollama-chat-container" });
    
    // Create input container
    const inputContainer = this.chatContainerEl.createDiv({ cls: "chat-input-container" });
    
    // Create textarea for input
    this.inputEl = inputContainer.createEl("textarea", {
      attr: {
        placeholder: "Напишіть повідомлення...",
      },
    });
    
    // Create send button (moved before settings button)
    const sendButton = inputContainer.createEl("button", {
      cls: "send-button",
    });
    setIcon(sendButton, "send");
    
    // Create settings button (now after send button)
    const settingsButton = inputContainer.createEl("button", {
      cls: "settings-button",
    });
    setIcon(settingsButton, "settings");
    
    // Handle enter key to send message
    this.inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });
    
    // Handle settings button click
    settingsButton.addEventListener("click", () => {
      const setting = (this.app as any).setting;
      setting.open();
      setting.openTabById('my-ollama-plugin');
    });
    
    // Handle send button click
    sendButton.addEventListener("click", () => {
      this.sendMessage();
    });
    
    // Load message history
    await this.loadMessageHistory();
  }
  
  async loadMessageHistory() {
    if (this.historyLoaded) return;
    
    try {
      const history = await this.plugin.loadMessageHistory();
      
      if (Array.isArray(history) && history.length > 0) {
        // Clear existing messages
        this.messages = [];
        this.chatContainer.empty();
        
        // Add each message from history
        for (const msg of history) {
          // Convert string timestamp to Date object
          const message = {
            ...msg,
            timestamp: new Date(msg.timestamp)
          };
          
          this.messages.push(message);
          this.renderMessage(message);
        }
        
        // Scroll to bottom
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
      }
      
      this.historyLoaded = true;
    } catch (error) {
      console.error("Error loading message history:", error);
    }
  }
  
  async saveMessageHistory() {
    if (this.messages.length === 0) return;
    
    try {
      // Convert messages to a serializable format
      const serializedMessages = this.messages.map(msg => ({
        role: msg.role,
        content: msg.content,
        timestamp: msg.timestamp.toISOString()
      }));
      
      await this.plugin.saveMessageHistory(JSON.stringify(serializedMessages));
    } catch (error) {
      console.error("Error saving message history:", error);
    }
  }

  async sendMessage(): Promise<void> {
    if (this.isProcessing) return;
    
    const content = this.inputEl.value.trim();
    if (!content) return;
    
    // Add user message to chat
    this.addMessage("user", content);
    
    // Clear input
    this.inputEl.value = "";
    
    // Process with Ollama API
    await this.processWithOllama(content);
  }

  addMessage(role: "user" | "assistant", content: string): void {
    const message: Message = {
      role,
      content,
      timestamp: new Date()
    };
    
    this.messages.push(message);
    this.renderMessage(message);
    
    // Save updated message history
    this.saveMessageHistory();
    
    // Scroll to bottom
    this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
  }

// ... (інший код)

renderMessage(message: Message): void {
  const isUser = message.role === "user";
  const isFirstInGroup = this.isFirstMessageInGroup(message);
  const isLastInGroup = this.isLastMessageInGroup(message);

  // Check if we need to create a new message group
  let messageGroup: HTMLElement;
  const lastGroup = this.chatContainer.lastElementChild;

  if (isFirstInGroup) {
      // Create a new message group
      messageGroup = this.chatContainer.createDiv({
          cls: `message-group ${isUser ? "user-message-group" : "ollama-message-group"}`
      });
  } else {
      // Use the last group
      messageGroup = lastGroup as HTMLElement;
  }

  // Create message element
  const messageEl = messageGroup.createDiv({
      cls: `message ${isUser ? "user-message bubble user-bubble" : "ollama-message bubble ollama-bubble"} ${isLastInGroup ? (isUser ? "user-message-tail" : "ollama-message-tail") : ""}`
  });

  // Create message content container
  const contentContainer = messageEl.createDiv({ cls: "message-content-container" });

  // Add message content
  const contentEl = contentContainer.createDiv({
      cls: "message-content",
      text: message.content
  });

  // Add copy button
  const copyButton = contentContainer.createEl("button", {
      cls: "copy-button",
      attr: { title: "Скопіювати" }
  });
  setIcon(copyButton, "copy");

  // Add copy functionality
  copyButton.addEventListener("click", () => {
      navigator.clipboard.writeText(message.content);

      // Show feedback
      copyButton.setText("Скопійовано!");
      setTimeout(() => {
          copyButton.empty();
          setIcon(copyButton, "copy");
      }, 2000);
  });

  // Add timestamp if last in group
  if (isLastInGroup) {
      messageEl.createDiv({
          cls: "message-timestamp",
          text: this.formatTime(message.timestamp)
      });
  }
}


  isFirstMessageInGroup(message: Message): boolean {
    const index = this.messages.indexOf(message);
    if (index === 0) return true;
    
    const prevMessage = this.messages[index - 1];
    return prevMessage.role !== message.role;
  }

  isLastMessageInGroup(message: Message): boolean {
    const index = this.messages.indexOf(message);
    if (index === this.messages.length - 1) return true;
    
    const nextMessage = this.messages[index + 1];
    return nextMessage.role !== message.role;
  }

  formatTime(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  async processWithOllama(content: string): Promise<void> {
    this.isProcessing = true;
    
    // Add a temporary "loading" message
    const loadingMessageEl = this.addLoadingMessage();
    
    try {
      const serverUrl = this.plugin.getOllamaApiUrl();
      const response = await fetch(`${serverUrl}/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: this.plugin.settings.modelName,
          prompt: content,
          stream: false,
        }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Remove loading message
      if (loadingMessageEl.parentNode) {
        loadingMessageEl.parentNode.removeChild(loadingMessageEl);
      }
      
      // Add the response as a message
      this.addMessage("assistant", data.response);
      
    } catch (error) {
      console.error("Error processing with Ollama:", error);
      
      // Remove loading message
      if (loadingMessageEl.parentNode) {
        loadingMessageEl.parentNode.removeChild(loadingMessageEl);
      }
      
      // Add an error message
      this.addMessage("assistant", "Помилка з'єднання з Ollama. Перевірте налаштування та переконайтеся, що сервер працює.");
    } finally {
      this.isProcessing = false;
    }
  }

  addLoadingMessage(): HTMLElement {
    const messageGroup = this.chatContainer.createDiv({
      cls: "message-group ollama-message-group"
    });
    
    const messageEl = messageGroup.createDiv({
      cls: "message ollama-message ollama-message-tail"
    });
    
    messageEl.createDiv({ text: "Думаю..." });
    
    const loadingIndicator = messageEl.createDiv({
      cls: "loading-indicator"
    });
    
    // Scroll to bottom
    this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    
    return messageGroup;
  }
  // ... (інший код)


  async clearChatMessages() {
  this.messages = [];
  this.chatContainer.empty();
  this.historyLoaded = false;
}


}