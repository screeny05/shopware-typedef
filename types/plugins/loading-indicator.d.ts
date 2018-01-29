interface SwPluginLoadingIndicatorOptions {
    loaderCls: string;
    iconCls: string;
    delay: number;
    animationSpeed: number;
    closeOnClick: boolean;
    openOverlay: boolean;
}

interface SwPluginLoadingIndicator {
    $loader: null|JQuery;
    defaults: SwPluginLoadingIndicatorOptions;
    options: SwPluginLoadingIndicatorOptions;
    open(indicatorOptions: Partial<SwPluginLoadingIndicatorOptions>): void;
    close(callback?: (this: SwPluginLoadingIndicator) => void): void;
}