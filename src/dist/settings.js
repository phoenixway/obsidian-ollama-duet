"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.OllamaSettingTab = exports.DEFAULT_SETTINGS = void 0;
// settings.ts
var obsidian_1 = require("obsidian");
// --- Мови (залишаємо як є) ---
var LANGUAGES = {
    "af": "Afrikaans", "sq": "Albanian", "am": "Amharic", "ar": "Arabic", "hy": "Armenian",
    "az": "Azerbaijani", "eu": "Basque", "be": "Belarusian", "bn": "Bengali", "bs": "Bosnian",
    "bg": "Bulgarian", "ca": "Catalan", "ceb": "Cebuano", "ny": "Chichewa", "zh-CN": "Chinese (Simplified)",
    "zh-TW": "Chinese (Traditional)", "co": "Corsican", "hr": "Croatian", "cs": "Czech", "da": "Danish",
    "nl": "Dutch", "en": "English", "eo": "Esperanto", "et": "Estonian", "tl": "Filipino",
    "fi": "Finnish", "fr": "French", "fy": "Frisian", "gl": "Galician", "ka": "Georgian",
    "de": "German", "el": "Greek", "gu": "Gujarati", "ht": "Haitian Creole", "ha": "Hausa",
    "haw": "Hawaiian", "iw": "Hebrew", "he": "Hebrew", "hi": "Hindi", "hmn": "Hmong",
    "hu": "Hungarian", "is": "Icelandic", "ig": "Igbo", "id": "Indonesian", "ga": "Irish",
    "it": "Italian", "ja": "Japanese", "jw": "Javanese", "kn": "Kannada", "kk": "Kazakh",
    "km": "Khmer", "rw": "Kinyarwanda", "ko": "Korean", "ku": "Kurdish (Kurmanji)", "ky": "Kyrgyz",
    "lo": "Lao", "la": "Latin", "lv": "Latvian", "lt": "Lithuanian", "lb": "Luxembourgish",
    "mk": "Macedonian", "mg": "Malagasy", "ms": "Malay", "ml": "Malayalam", "mt": "Maltese",
    "mi": "Maori", "mr": "Marathi", "mn": "Mongolian", "my": "Myanmar (Burmese)", "ne": "Nepali",
    "no": "Norwegian", "or": "Odia (Oriya)", "ps": "Pashto", "fa": "Persian", "pl": "Polish",
    "pt": "Portuguese", "pa": "Punjabi", "ro": "Romanian", "ru": "Russian", "sm": "Samoan",
    "gd": "Scots Gaelic", "sr": "Serbian", "st": "Sesotho", "sn": "Shona", "sd": "Sindhi",
    "si": "Sinhala", "sk": "Slovak", "sl": "Slovenian", "so": "Somali", "es": "Spanish",
    "su": "Sundanese", "sw": "Swahili", "sv": "Swedish", "tg": "Tajik", "ta": "Tamil",
    "tt": "Tatar", "te": "Telugu", "th": "Thai", "tr": "Turkish", "tk": "Turkmen",
    "uk": "Ukrainian", "ur": "Urdu", "ug": "Uyghur", "uz": "Uzbek", "vi": "Vietnamese",
    "cy": "Welsh", "xh": "Xhosa", "yi": "Yiddish", "yo": "Yoruba", "zu": "Zulu"
};
// --- Значення за замовчуванням ---
exports.DEFAULT_SETTINGS = {
    ollamaServerUrl: "http://localhost:11434",
    modelName: "",
    temperature: 0.7,
    contextWindow: 4096,
    userRolesFolderPath: "/etc/roles",
    selectedRolePath: "",
    saveMessageHistory: true,
    ragEnabled: false,
    ragFolderPath: "",
    googleApiKey: "",
    speechLanguage: "uk-UA",
    userAvatarType: 'initials',
    userAvatarContent: 'U',
    aiAvatarType: 'icon',
    aiAvatarContent: 'bot',
    maxMessageHeight: 300,
    enableTranslation: false,
    translationTargetLanguage: "uk",
    googleTranslationApiKey: "",
    chatHistoryFolderPath: "/etc/chats",
    chatExportFolderPath: "/etc/chats",
    enableProductivityFeatures: false,
    dailyTaskFileName: "Tasks_Today.md",
    useAdvancedContextStrategy: false,
    enableSummarization: false,
    summarizationPrompt: "Summarize the key points of the preceding conversation concisely, focusing on information relevant for future interactions:\n{text_to_summarize}",
    keepLastNMessagesBeforeSummary: 10,
    summarizationChunkSize: 1500,
    followRole: true
};
// --- Клас вкладки налаштувань ---
var OllamaSettingTab = /** @class */ (function (_super) {
    __extends(OllamaSettingTab, _super);
    function OllamaSettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        // --- Ініціалізація Debounced функцій ---
        _this.debouncedUpdateChatPath = obsidian_1.debounce(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Debounced: Updating chat path and ensuring folder exists...");
                        if (!this.plugin.chatManager) return [3 /*break*/, 2];
                        this.plugin.chatManager.updateChatsFolderPath();
                        // Викликаємо ensure замість повного initialize, щоб уникнути перезавантаження індексу
                        return [4 /*yield*/, this.plugin.chatManager.ensureChatsFolderExists()];
                    case 1:
                        // Викликаємо ensure замість повного initialize, щоб уникнути перезавантаження індексу
                        _a.sent(); // Припускаємо, що метод є приватним, але доступний
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); }, 1000, true); // Затримка 1 секунда
        _this.debouncedUpdateRolePath = obsidian_1.debounce(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Debounced: Refreshing role list due to path change...");
                        return [4 /*yield*/, this.plugin.listRoleFiles(true)];
                    case 1:
                        _a.sent(); // Примусово оновлюємо список
                        this.plugin.emit('roles-updated'); // Повідомляємо View
                        return [2 /*return*/];
                }
            });
        }); }, 1000, true);
        _this.debouncedUpdateRagPath = obsidian_1.debounce(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Debounced: Re-indexing RAG due to path change...");
                        if (!(this.plugin.settings.ragEnabled && this.plugin.ragService)) return [3 /*break*/, 2];
                        // Можливо, варто додати метод для оновлення шляху в ragService
                        // this.plugin.ragService.updateFolderPath();
                        return [4 /*yield*/, this.plugin.ragService.indexDocuments()];
                    case 1:
                        // Можливо, варто додати метод для оновлення шляху в ragService
                        // this.plugin.ragService.updateFolderPath();
                        _a.sent(); // Переіндексовуємо
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); }, 1000, true);
        return _this;
        // --------------------------------------
    }
    OllamaSettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl("h2", { text: "AI Forge Settings" });
        // --- Connection & Model ---
        containerEl.createEl('h3', { text: 'Connection & Model' });
        // ... (Ollama Server URL, Default Model Name, Default Temperature, Context Window Size) ...
        new obsidian_1.Setting(containerEl).setName("Ollama Server URL").setDesc("The URL of your running Ollama server.").addText(function (text) { return text.setPlaceholder(exports.DEFAULT_SETTINGS.ollamaServerUrl).setValue(_this.plugin.settings.ollamaServerUrl).onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    this.plugin.settings.ollamaServerUrl = value.trim() || exports.DEFAULT_SETTINGS.ollamaServerUrl;
                    return [4 /*yield*/, this.plugin.saveSettings()];
                case 1:
                    _a.sent();
                    this.plugin.updateOllamaServiceConfig();
                    return [2 /*return*/];
            }
        }); }); }); });
        // --- Default Model Name ---
        var modelSetting = new obsidian_1.Setting(containerEl)
            .setName("Default Model Name")
            .setDesc("The default Ollama model to use for new chats. Select from available models.");
        var modelDropdown = null;
        // Функція для оновлення опцій
        var updateOptions = function (dropdown) { return __awaiter(_this, void 0, void 0, function () {
            var models, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!dropdown)
                            return [2 /*return*/];
                        dropdown.selectEl.innerHTML = ''; // Очищуємо
                        dropdown.addOption('', 'Loading models...');
                        dropdown.setDisabled(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.plugin.ollamaService.getModels()];
                    case 2:
                        models = _a.sent();
                        dropdown.selectEl.innerHTML = ''; // Очищуємо
                        dropdown.addOption('', '-- Select default model --');
                        if (models && models.length > 0) {
                            models.forEach(function (modelName) { dropdown.addOption(modelName, modelName); });
                        }
                        else {
                            dropdown.addOption('', 'No models found');
                        }
                        dropdown.setValue(this.plugin.settings.modelName);
                        dropdown.setDisabled(false);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error("Error fetching models for settings:", error_1);
                        dropdown.selectEl.innerHTML = '';
                        dropdown.addOption('', 'Error loading models!');
                        dropdown.setValue(this.plugin.settings.modelName);
                        dropdown.setDisabled(true);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        modelSetting.addDropdown(function (dropdown) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modelDropdown = dropdown; // Зберігаємо посилання
                        dropdown.onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.plugin.settings.modelName = value;
                                        return [4 /*yield*/, this.plugin.saveSettings()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, updateOptions(dropdown)];
                    case 1:
                        _a.sent(); // Початкове завантаження
                        return [2 /*return*/];
                }
            });
        }); });
        modelSetting.controlEl.addClass('ollama-model-setting-control');
        var refreshButton = modelSetting.controlEl.createEl('button', {
            cls: 'ollama-refresh-button',
            attr: { 'aria-label': 'Refresh model list' }
        });
        // Тепер setIcon має бути знайдено
        obsidian_1.setIcon(refreshButton, 'refresh-cw');
        refreshButton.addEventListener('click', function (e) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        if (!modelDropdown)
                            return [2 /*return*/];
                        // Тепер setIcon має бути знайдено
                        obsidian_1.setIcon(refreshButton, 'loader');
                        refreshButton.disabled = true;
                        return [4 /*yield*/, updateOptions(modelDropdown)];
                    case 1:
                        _a.sent();
                        // Тепер setIcon має бути знайдено
                        obsidian_1.setIcon(refreshButton, 'refresh-cw');
                        refreshButton.disabled = false;
                        return [2 /*return*/];
                }
            });
        }); });
        // --- КІНЕЦЬ КОДУ З КНОПКОЮ ---
        new obsidian_1.Setting(containerEl).setName("Default Temperature").setDesc("Controls randomness. Lower values (e.g., 0.2) make output more deterministic, higher values (e.g., 0.8) make it more creative.").addSlider(function (slider) { return slider.setLimits(0, 1, 0.1).setValue(_this.plugin.settings.temperature).setDynamicTooltip().onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    this.plugin.settings.temperature = value;
                    return [4 /*yield*/, this.plugin.saveSettings()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        }); }); }); });
        new obsidian_1.Setting(containerEl).setName("Context Window Size (Tokens)").setDesc("Maximum number of tokens (input + output) the model considers. Adjust based on model and available memory.").addText(function (text) { return text.setPlaceholder(exports.DEFAULT_SETTINGS.contextWindow.toString()).setValue(_this.plugin.settings.contextWindow.toString()).onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { var num; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    num = parseInt(value.trim(), 10);
                    if (!isNaN(num) && num > 0) {
                        this.plugin.settings.contextWindow = num;
                    }
                    else {
                        this.plugin.settings.contextWindow = exports.DEFAULT_SETTINGS.contextWindow;
                    }
                    return [4 /*yield*/, this.plugin.saveSettings()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        }); }); }); });
        containerEl.createEl('h3', { text: 'Roles & Personas' });
        new obsidian_1.Setting(containerEl)
            .setName('Custom Roles Folder Path')
            .setDesc('Folder within your vault containing custom role definition (.md) files.')
            .addText(function (text) { return text
            .setPlaceholder('Example: System Prompts/Ollama Roles')
            .setValue(_this.plugin.settings.userRolesFolderPath)
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.userRolesFolderPath = value.trim();
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent(); // Зберігаємо саме налаштування одразу
                        // --- ВИКЛИКАЄМО DEBOUNCED ---
                        this.debouncedUpdateRolePath();
                        return [2 /*return*/];
                }
            });
        }); }); }); // --- Додано налаштування followRole ---
        new obsidian_1.Setting(containerEl)
            .setName('Always Apply Selected Role')
            .setDesc('If enabled, the globally selected role (or chat-specific role) will always be used as the system prompt.')
            .addToggle(function (toggle) { return toggle
            .setValue(_this.plugin.settings.followRole)
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.followRole = value;
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }); });
        // --------------------------------------
        containerEl.createEl('h3', { text: 'Storage & History' });
        new obsidian_1.Setting(containerEl)
            .setName('Save Message History')
            .setDesc('Automatically save chat conversations to files.')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.saveMessageHistory).onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    this.plugin.settings.saveMessageHistory = value;
                    return [4 /*yield*/, this.plugin.saveSettings()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        }); }); }); });
        new obsidian_1.Setting(containerEl)
            .setName('Chat History Folder Path')
            .setDesc('Folder within your vault to store chat history (.json files). Leave empty to save in the vault root.')
            .addText(function (text) { return text
            .setPlaceholder(exports.DEFAULT_SETTINGS.chatHistoryFolderPath || 'Vault Root')
            .setValue(_this.plugin.settings.chatHistoryFolderPath)
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.chatHistoryFolderPath = value.trim();
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent(); // Зберігаємо саме налаштування одразу
                        // --- ВИКЛИКАЄМО DEBOUNCED ---
                        this.debouncedUpdateChatPath();
                        return [2 /*return*/];
                }
            });
        }); }); });
        containerEl.createEl('h3', { text: 'Retrieval-Augmented Generation (RAG)' });
        new obsidian_1.Setting(containerEl)
            .setName('Enable RAG')
            .setDesc('Allow the chat to retrieve information from your notes for context (requires indexing).')
            .addToggle(function (toggle) { return toggle
            .setValue(_this.plugin.settings.ragEnabled)
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.ragEnabled = value;
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        this.display();
                        // Запускаємо індексацію при увімкненні (з затримкою)
                        if (value)
                            this.debouncedUpdateRagPath();
                        return [2 /*return*/];
                }
            });
        }); }); });
        if (this.plugin.settings.ragEnabled) {
            new obsidian_1.Setting(containerEl)
                .setName('RAG Documents Folder Path')
                .setDesc('Folder within your vault containing notes to use for RAG context.')
                .addText(function (text) { return text
                .setPlaceholder('Example: Knowledge Base/RAG Docs')
                .setValue(_this.plugin.settings.ragFolderPath)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                var _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            this.plugin.settings.ragFolderPath = value.trim();
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _e.sent(); // Зберігаємо саме налаштування одразу
                            this.debouncedUpdateRagPath();
                            (_b = (_a = this.plugin).updateDailyTaskFilePath) === null || _b === void 0 ? void 0 : _b.call(_a);
                            (_d = (_c = this.plugin).loadAndProcessInitialTasks) === null || _d === void 0 ? void 0 : _d.call(_c);
                            return [2 /*return*/];
                    }
                });
            }); }); });
        }
        containerEl.createEl('h3', { text: 'Productivity Assistant Features' });
        // Головний перемикач для функцій продуктивності
        new obsidian_1.Setting(containerEl)
            .setName('Enable Productivity Features')
            .setDesc('Activate features like daily task integration and advanced context management for planning-oriented personas.')
            .addToggle(function (toggle) { return toggle
            .setValue(_this.plugin.settings.enableProductivityFeatures)
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.enableProductivityFeatures = value;
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        this.display(); // Перерендерити, щоб показати/сховати залежні налаштування
                        return [2 /*return*/];
                }
            });
        }); }); });
        // Показуємо залежні налаштування, тільки якщо основна функція увімкнена
        if (this.plugin.settings.enableProductivityFeatures) {
            // Налаштування файлу завдань
            new obsidian_1.Setting(containerEl)
                .setName('Daily Task File Name')
                .setDesc('The exact filename (including .md) of your daily task list within the RAG folder.')
                .addText(function (text) { return text
                .setPlaceholder(exports.DEFAULT_SETTINGS.dailyTaskFileName)
                .setValue(_this.plugin.settings.dailyTaskFileName)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                var _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            this.plugin.settings.dailyTaskFileName = value.trim() || exports.DEFAULT_SETTINGS.dailyTaskFileName;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _e.sent();
                            // Повідомити плагін про зміну шляху/імені файлу
                            (_b = (_a = this.plugin).updateDailyTaskFilePath) === null || _b === void 0 ? void 0 : _b.call(_a); // Викликаємо метод оновлення шляху (якщо він є)
                            (_d = (_c = this.plugin).loadAndProcessInitialTasks) === null || _d === void 0 ? void 0 : _d.call(_c); // Перезавантажити завдання
                            return [2 /*return*/];
                    }
                });
            }); }); });
            // Налаштування розширеного контексту
            new obsidian_1.Setting(containerEl)
                .setName('Use Advanced Context Strategy')
                .setDesc('Enables summarization and chunking for long conversations (requires Productivity Features enabled).')
                .addToggle(function (toggle) { return toggle
                .setValue(_this.plugin.settings.useAdvancedContextStrategy)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.useAdvancedContextStrategy = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            this.display(); // Перерендерити, щоб показати/сховати налаштування підсумовування
                            return [2 /*return*/];
                    }
                });
            }); }); });
            // Налаштування підсумовування (якщо увімкнено розширену стратегію)
            if (this.plugin.settings.useAdvancedContextStrategy) {
                new obsidian_1.Setting(containerEl)
                    .setName('Enable Context Summarization')
                    .setDesc('Allow summarizing older parts of the chat history.')
                    .addToggle(function (toggle) { return toggle
                    .setValue(_this.plugin.settings.enableSummarization)
                    .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.plugin.settings.enableSummarization = value;
                                return [4 /*yield*/, this.plugin.saveSettings()];
                            case 1:
                                _a.sent();
                                this.display(); // Перерендерити, щоб показати/сховати промпт підсумовування
                                return [2 /*return*/];
                        }
                    });
                }); }); });
                // Промпт для підсумовування (якщо увімкнено підсумовування)
                if (this.plugin.settings.enableSummarization) {
                    new obsidian_1.Setting(containerEl)
                        .setName('Summarization Prompt')
                        .setDesc('Prompt for summarizing history. Use {text_to_summarize}.')
                        .addTextArea(function (text) { return text
                        .setPlaceholder(exports.DEFAULT_SETTINGS.summarizationPrompt)
                        .setValue(_this.plugin.settings.summarizationPrompt)
                        .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.plugin.settings.summarizationPrompt = value || exports.DEFAULT_SETTINGS.summarizationPrompt;
                                    return [4 /*yield*/, this.plugin.saveSettings()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })
                        // Зробимо поле трохи більшим
                        .inputEl.setAttrs({ rows: 4 }); });
                }
                // Кількість повідомлень перед підсумовуванням
                new obsidian_1.Setting(containerEl)
                    .setName('Keep Last N Messages Before Summary')
                    .setDesc('Number of recent messages kept verbatim before considering summarization.')
                    .addText(function (text) { return text
                    .setPlaceholder(exports.DEFAULT_SETTINGS.keepLastNMessagesBeforeSummary.toString())
                    .setValue(_this.plugin.settings.keepLastNMessagesBeforeSummary.toString())
                    .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                    var num;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                num = parseInt(value.trim(), 10);
                                this.plugin.settings.keepLastNMessagesBeforeSummary = (!isNaN(num) && num >= 0) ? num : exports.DEFAULT_SETTINGS.keepLastNMessagesBeforeSummary;
                                return [4 /*yield*/, this.plugin.saveSettings()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }); });
                // Розмір чанку для підсумовування
                new obsidian_1.Setting(containerEl)
                    .setName('Summarization Chunk Size (Tokens)')
                    .setDesc('Approximate token size of message chunks processed for summarization.')
                    .addText(function (text) { return text
                    .setPlaceholder(exports.DEFAULT_SETTINGS.summarizationChunkSize.toString())
                    .setValue(_this.plugin.settings.summarizationChunkSize.toString())
                    .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                    var num;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                num = parseInt(value.trim(), 10);
                                // Встановлюємо мінімальний розумний розмір, наприклад 100
                                this.plugin.settings.summarizationChunkSize = (!isNaN(num) && num > 100) ? num : exports.DEFAULT_SETTINGS.summarizationChunkSize;
                                return [4 /*yield*/, this.plugin.saveSettings()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }); });
            }
        }
        // --- End Productivity Assistant Features ---
        // --- Appearance Settings ---
        containerEl.createEl('h3', { text: 'Appearance' });
        // ... (User Avatar Style, User Initials/Icon, AI Avatar Style, AI Initials/Icon, Max Message Height) ...
        new obsidian_1.Setting(containerEl).setName('User Avatar Style').addDropdown(function (dropdown) { return dropdown.addOption('initials', 'Initials').addOption('icon', 'Icon').setValue(_this.plugin.settings.userAvatarType).onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    this.plugin.settings.userAvatarType = value;
                    return [4 /*yield*/, this.plugin.saveSettings()];
                case 1:
                    _a.sent();
                    this.display();
                    return [2 /*return*/];
            }
        }); }); }); });
        if (this.plugin.settings.userAvatarType === 'initials') {
            new obsidian_1.Setting(containerEl).setName('User Initials').setDesc('Max 2 characters.').addText(function (text) { return text.setValue(_this.plugin.settings.userAvatarContent).onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.userAvatarContent = value.trim().substring(0, 2) || 'U';
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            }); }); }); });
        }
        else {
            new obsidian_1.Setting(containerEl).setName('User Icon ID').setDesc('Enter an Obsidian icon ID (e.g., "user", "lucide-user").').addText(function (text) { return text.setPlaceholder('user').setValue(_this.plugin.settings.userAvatarContent).onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.userAvatarContent = value.trim() || 'user';
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            }); }); }); });
        }
        new obsidian_1.Setting(containerEl).setName('AI Avatar Style').addDropdown(function (dropdown) { return dropdown.addOption('initials', 'Initials').addOption('icon', 'Icon').setValue(_this.plugin.settings.aiAvatarType).onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    this.plugin.settings.aiAvatarType = value;
                    return [4 /*yield*/, this.plugin.saveSettings()];
                case 1:
                    _a.sent();
                    this.display();
                    return [2 /*return*/];
            }
        }); }); }); });
        if (this.plugin.settings.aiAvatarType === 'initials') {
            new obsidian_1.Setting(containerEl).setName('AI Initials').setDesc('Max 2 characters.').addText(function (text) { return text.setValue(_this.plugin.settings.aiAvatarContent).onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.aiAvatarContent = value.trim().substring(0, 2) || 'AI';
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            }); }); }); });
        }
        else {
            new obsidian_1.Setting(containerEl).setName('AI Icon ID').setDesc('Enter an Obsidian icon ID (e.g., "bot", "lucide-bot").').addText(function (text) { return text.setPlaceholder('bot').setValue(_this.plugin.settings.aiAvatarContent).onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.aiAvatarContent = value.trim() || 'bot';
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            }); }); }); });
        }
        new obsidian_1.Setting(containerEl).setName('Max Message Height (pixels)').setDesc("Collapse longer messages, showing a 'Show More' button. Set to 0 to disable collapsing.").addText(function (text) { return text.setPlaceholder('Example: 300').setValue(_this.plugin.settings.maxMessageHeight.toString()).onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { var num; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    num = parseInt(value.trim(), 10);
                    if (!isNaN(num) && num >= 0) {
                        this.plugin.settings.maxMessageHeight = num;
                    }
                    else {
                        this.plugin.settings.maxMessageHeight = exports.DEFAULT_SETTINGS.maxMessageHeight;
                    }
                    return [4 /*yield*/, this.plugin.saveSettings()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        }); }); }); });
        // --- Speech & Translation Settings ---
        containerEl.createEl('h3', { text: 'Speech & Translation' });
        // ... (Google API Key (STT), Speech Recognition Language, Enable Translation, Target Language, Google Translation API Key) ...
        new obsidian_1.Setting(containerEl).setName('Google API Key (Speech-to-Text)').setDesc('Required for the voice input feature. Keep this confidential.').addText(function (text) { return text.setPlaceholder('Enter your API Key').setValue(_this.plugin.settings.googleApiKey).onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    this.plugin.settings.googleApiKey = value.trim();
                    return [4 /*yield*/, this.plugin.saveSettings()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        }); }); }); });
        new obsidian_1.Setting(containerEl).setName('Speech Recognition Language').setDesc('Select the language for voice input.').addDropdown(function (dropdown) { var speechLangs = { "uk-UA": "Ukrainian", "en-US": "English (US)", "en-GB": "English (UK)", "de-DE": "German", "fr-FR": "French", "es-ES": "Spanish", "it-IT": "Italian", "ja-JP": "Japanese", "ko-KR": "Korean", "pt-BR": "Portuguese (Brazil)", "ru-RU": "Russian", "zh-CN": "Chinese (Mandarin, Simplified)" }; for (var code in speechLangs) {
            dropdown.addOption(code, speechLangs[code]);
        } dropdown.setValue(_this.plugin.settings.speechLanguage).onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    this.plugin.settings.speechLanguage = value;
                    return [4 /*yield*/, this.plugin.saveSettings()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        }); }); }); });
        new obsidian_1.Setting(containerEl).setName('Enable Translation Feature').setDesc('Show buttons to translate messages or input using Google Translate API.').addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.enableTranslation).onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    this.plugin.settings.enableTranslation = value;
                    return [4 /*yield*/, this.plugin.saveSettings()];
                case 1:
                    _a.sent();
                    this.display();
                    return [2 /*return*/];
            }
        }); }); }); });
        if (this.plugin.settings.enableTranslation) {
            new obsidian_1.Setting(containerEl).setName('Target Translation Language').setDesc('Select the language to translate messages/input into.').addDropdown(function (dropdown) { for (var code in LANGUAGES) {
                dropdown.addOption(code, LANGUAGES[code]);
            } dropdown.setValue(_this.plugin.settings.translationTargetLanguage).onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.translationTargetLanguage = value;
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            }); }); }); });
            new obsidian_1.Setting(containerEl).setName('Google Cloud Translation API Key').setDesc('Required for the translation feature. Keep this confidential.').addText(function (text) { return text.setPlaceholder('Enter your API Key').setValue(_this.plugin.settings.googleTranslationApiKey).onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.googleTranslationApiKey = value.trim();
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            }); }); }); });
        }
        // --- Export Settings ---
        containerEl.createEl('h3', { text: 'Export Settings' });
        // ... (Chat Export Folder Path) ...
        new obsidian_1.Setting(containerEl).setName('Chat Export Folder Path').setDesc('Folder within your vault to save exported Markdown chats. Leave empty to save in the vault root.').addText(function (text) { return text.setPlaceholder(exports.DEFAULT_SETTINGS.chatExportFolderPath || 'Vault Root').setValue(_this.plugin.settings.chatExportFolderPath).onChange(function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    this.plugin.settings.chatExportFolderPath = value.trim();
                    return [4 /*yield*/, this.plugin.saveSettings()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        }); }); }); });
    };
    return OllamaSettingTab;
}(obsidian_1.PluginSettingTab));
exports.OllamaSettingTab = OllamaSettingTab;
