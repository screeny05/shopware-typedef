/// <reference path="./plugins/address-selection"/>
/// <reference path="./plugins/overlay"/>
/// <reference path="./plugins/modal"/>
/// <reference path="./plugins/loading-indicator"/>
/// <reference path="./plugins/overlay"/>

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
    applyDataAttributes(shouldDeserialize?: boolean): any;
}

interface SwPluginPrototypeConstructor<T = SwPluginPrototype, U = any> {
    new(name: string, element: JQuery, options?: U): T;
    prototype: T;
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

    plugin(name: string, plugin: SwPluginDefinition | SwPluginPrototypeConstructor): void;
    overridePlugin(pluginName: string, override: any): void;
    extendsPlugin(pluginName: string, basePluginName: string, override: any): void;
    PluginBase: SwPluginPrototypeConstructor;

    getCookie(name: string): string | undefined;
    removeCookie(name: string): void;

    addressSelection: SwPluginAddressSelection;
    lightbox: SwPluginLightbox;
    loadingIndicator: SwPluginLoadingIndicator;
    modal: SwPluginModal;
    overlay: SwPluginOverlay;
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
