interface SwPluginOverlayOptions {
    closeOnClick: boolean;
    onClick(this: JQuery): void;
    onClose(this: JQuery): void;
}

interface SwPluginOverlay {
    open(options: Partial<SwPluginOverlayOptions>): void;
    close(): void;
    isOpen(): boolean;
    getElement(): JQuery;
}
