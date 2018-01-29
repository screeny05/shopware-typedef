/// <reference types="jquery"/>

interface SwStateManagerBreakpoint {
    state: string;
    enter: number;
    exit: number;
}
interface SwStateManagerListenerTransition {
    exiting: string;
    entering: string;
}
interface SwStateManagerListener {
    state: string;
    enter?(e: SwStateManagerListenerTransition): void;
    exit?(e: SwStateManagerListenerTransition): void;
}
interface SwStateManagerMatchMediaResult {
    matches: boolean;
    media: string;
}
interface SwStateManagerScrollBarSize {
    width: number;
    height: number;
}
interface SwEventEmitter {
    on<T>(eventName: string, callback: (this: T, ...args: any[]) => void, context?: T): this;
    once<T>(eventName: string, callback: (this: T, ...args: any[]) => void, context?: T): this;
    off(eventName: string, callback?: Function, context?: any): this;
    trigger(eventName: string, ...args: any[]): this;
    destroy(): void;
}

interface SwStateManager extends SwEventEmitter {
    EventEmitter: any;
    init(breakpoints: SwStateManagerBreakpoint[]): this;
    registerBreakpoint(...breakpoints: SwStateManagerBreakpoint[]): this;
    registerBreakpoint(breakpoints: SwStateManagerBreakpoint[]): this;
    removeBreakpoint(state: string): this;
    registerListener(...listeners: SwStateManagerListener[]): this;
    registerListener(listeners: SwStateManagerListener[]): this;
    addPlugin(selector: string, pluginName: string, viewport?: string[] | string): this;
    addPlugin(selector: string, pluginName: string, config?: any, viewport?: string[] | string): this;
    removePlugin(selector: string, pluginName: string, viewport?: string[] | string): this;
    updatePlugin(selector: string, pluginName: string): this;
    addPluginToQueue(selector: string, pluginName: string): this;
    removePluginFromQueue(selector: string, pluginName: string): this;
    initQueuedPlugins(clearQueue: boolean): this;
    destroyPlugin(selector: string | JQuery, pluginName: string): this;
    getViewportWidth(): number;
    getViewportHeight(): number;
    getPreviousState(): string;
    isPreviousState(...states: string[]): boolean;
    isPreviousState(state: string[]): boolean;
    getCurrentState(): string;
    isCurrentState(...states: string[]): boolean;
    isCurrentState(state: string[]): boolean;
    isPortraitMode(): boolean;
    isLandscapeMode(): boolean;
    getDevicePixelRatio(): number;
    isBrowser(): boolean;
    getScrollBarSize(): SwStateManagerScrollBarSize;
    getScrollBarWidth(): number;
    getScrollBarHeight(): number;
    matchMedia(media: string): SwStateManagerMatchMediaResult;
    requestAnimationFrame(callback: (timestamp: number) => void): number;
    cancelAnimationFrame(id: number): void;
    getVendorProperty(property: string, softError: boolean): string;

    on<T>(eventName: string, callback: (this: T, ...args: any[]) => void, context?: T): this;
    on<T>(eventName: 'resize', callback: (this: T, width: number) => void, context?: T): this;
    on<T>(eventName: 'exitBreakpoint', callback: (this: T, previousState: string) => void, context?: T): this;
    on<T>(eventName: 'changeBreakpoint', callback: (this: T, transition: SwStateManagerListenerTransition) => void, context?: T): this;
    on<T>(eventName: 'enterBreakpoint', callback: (this: T, state: string) => void, context?: T): this;
}

interface SwStorageManagerImplementation {
    length: number;
    clear(): void;
    getItem(key: string): string | null;
    key(index: number): string | null;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
}

type SwStorageManagerImplementationType = 'local' | 'session';

interface SwStorageManager {
    hasCookiesSupport: boolean;
    hasLocalStorageSupport: boolean;
    hasSessionStorageSupport: boolean;
    getStorage(type: SwStorageManagerImplementationType): SwStorageManagerImplementation;
    getSessionStorage(): SwStorageManagerImplementation;
    getLocalStorage(): SwStorageManagerImplementation;

    clear(type: SwStorageManagerImplementationType): void;
    getItem(type: SwStorageManagerImplementationType, key: string): string | null;
    key(type: SwStorageManagerImplementationType, index: number): string | null;
    removeItem(type: SwStorageManagerImplementationType, key: string): void;
    setItem(type: SwStorageManagerImplementationType, key: string, value: string): void;
}

interface SwCsrf {
    storageKey: string;
    pendingRequests: any;
    getToken(): string;
    checkToken(): boolean;
    createTokenField(): JQuery;
    addTokenField(formElement: JQuery): void;
    getFormElements(): JQuery;
    updateForms(): void;
    setupAjax(): void;
    requestToken(): void;
    saveToken(token: string): void;
    init(): void;
    afterInit(): void;
}

declare abstract class SwPluginPrototype {
    $el: JQuery;
    opts: any;
    eventSuffix: string;

    _destroy(): this;
    _on($el: JQuery, event: string, ...args: any[]): this;
    _off($el: JQuery, event: string): this;
    getName(): string;
    getEventName(event: string): string;
    getElement(): JQuery;
    getOptions(): any;
    getOption(): any;
    setOption(key: string, value: any): this;
    applyDataAttributes(shouldDeserialize: boolean): any;
}

interface SwPluginPrototypeConstructor {
    new(): SwPluginPrototype;
}

interface SwPluginDefinition {
    defaults?: any;
    init(): void;
    destroy?(): void;
    update?(): void;
}

interface SwPluginsCollection {
    swAddArticle: SwPluginDefinition;
    swAddressEditor: SwPluginDefinition;
    swAddressSelection: SwPluginDefinition;
    swAjaxProductNavigation: SwPluginDefinition;
    swAjaxVariant: SwPluginDefinition;
    swAjaxWishlist: SwPluginDefinition;
    swAutoSubmit: SwPluginDefinition;
    swCaptcha: SwPluginDefinition;
    swCollapseCart: SwPluginDefinition;
    swCollapsePanel: SwPluginDefinition;
    swDropdownMenu: SwPluginDefinition;
    swEmotionLoader: SwPluginDefinition;
    swEmotion: SwPluginDefinition;
    swEmotionBanner: SwPluginDefinition;
    swEmotionVideo: SwPluginDefinition;
    swFilterComponent: SwPluginDefinition;
    swFormPolyfill: SwPluginDefinition;
    swImageGallery: SwPluginDefinition;
    swImageSlider: SwPluginDefinition;
    swImageZoom: SwPluginDefinition;
    swInfiniteScolling: SwPluginDefinition;
    swJumpToTab: SwPluginDefinition;
    swLastSeenProducts: SwPluginDefinition;
    swListingActions: SwPluginDefinition;
    swMenuScroller: SwPluginDefinition;
    swModalbox: SwPluginDefinition;
    swNewsletter: SwPluginDefinition;
    swOffcanvasButton: SwPluginDefinition;
    swOffcanvasMenu: SwPluginDefinition;
    swOffcanvasHtmlPanel: SwPluginDefinition;
    swPanelAutoResizer: SwPluginDefinition;
    swPreloaderButton: SwPluginDefinition;
    swProductCompareAdd: SwPluginDefinition;
    swProductCompareMenu: SwPluginDefinition;
    swProductSlider: SwPluginDefinition;
    swPseudoText: SwPluginDefinition;
    swRangeSlider: SwPluginDefinition;
    swRegister: SwPluginDefinition;
    swScrollAnimate: SwPluginDefinition;
    swSearch: SwPluginDefinition;
    swSelectboxReplacement: SwPluginDefinition;
    swShippingPayment: SwPluginDefinition;
    swSubCategoryNav: SwPluginDefinition;
    swTabMenu: SwPluginDefinition;
}

type SwPluginDefaultFn = (options?: any) => JQuery;

interface JQueryStatic {
    subscribe(name: string, handler: Function): void;
    unsubscribe(name: string, handler: Function): void;
    publish(name: string, data: any[]): void;

    plugin(name: string, plugin: SwPluginDefinition): void;
    overridePlugin(pluginName: string, override: any): void;
    extendsPlugin(pluginName: string, basePluginName: string, override: any): void;
    PluginBase: SwPluginPrototypeConstructor;

    addressSelection: any;
    getCookie(name: string): string | undefined;
    removeCookie(name: string): void;
    lightbox: any;
    loadingIndicator: any;
    modal: any;
    overlay: any;
}

interface JQuery {
    swAddArticle: SwPluginDefaultFn;
    swAddressEditor: SwPluginDefaultFn;
    swAddressSelection: SwPluginDefaultFn;
    swAjaxProductNavigation: SwPluginDefaultFn;
    swAjaxVariant: SwPluginDefaultFn;
    swAjaxWishlist: SwPluginDefaultFn;
    swAutoSubmit: SwPluginDefaultFn;
    swCaptcha: SwPluginDefaultFn;
    swCollapseCart: SwPluginDefaultFn;
    swCollapsePanel: SwPluginDefaultFn;
    swDropdownMenu: SwPluginDefaultFn;
    swEmotionLoader: SwPluginDefaultFn;
    swEmotion: SwPluginDefaultFn;
    swEmotionBanner: SwPluginDefaultFn;
    swEmotionVideo: SwPluginDefaultFn;
    swFilterComponent: SwPluginDefaultFn;
    swFormPolyfill: SwPluginDefaultFn;
    swImageGallery: SwPluginDefaultFn;
    swImageSlider: SwPluginDefaultFn;
    swImageZoom: SwPluginDefaultFn;
    swInfiniteScolling: SwPluginDefaultFn;
    swJumpToTab: SwPluginDefaultFn;
    swLastSeenProducts: SwPluginDefaultFn;
    swListingActions: SwPluginDefaultFn;
    swMenuScroller: SwPluginDefaultFn;
    swModalbox: SwPluginDefaultFn;
    swNewsletter: SwPluginDefaultFn;
    swOffcanvasButton: SwPluginDefaultFn;
    swOffcanvasMenu: SwPluginDefaultFn;
    swOffcanvasHtmlPanel: SwPluginDefaultFn;
    swPanelAutoResizer: SwPluginDefaultFn;
    swPreloaderButton: SwPluginDefaultFn;
    swProductCompareAdd: SwPluginDefaultFn;
    swProductCompareMenu: SwPluginDefaultFn;
    swProductSlider: SwPluginDefaultFn;
    swPseudoText: SwPluginDefaultFn;
    swRangeSlider: SwPluginDefaultFn;
    swRegister: SwPluginDefaultFn;
    swScrollAnimate: SwPluginDefaultFn;
    swSearch: SwPluginDefaultFn;
    swSelectboxReplacement: SwPluginDefaultFn;
    swShippingPayment: SwPluginDefaultFn;
    swSubCategoryNav: SwPluginDefaultFn;
    swTabMenu: SwPluginDefaultFn;
}


declare var PluginsCollection: SwPluginsCollection;
declare var StateManager: SwStateManager;
declare var StorageManager: SwStorageManager;
declare var CSRF: SwCsrf;

declare var controller: any;
declare var snippets: any;
declare var themeConfig: any;
declare var lastSeenProductsConfig: any;
declare var csrfConfig: any;
