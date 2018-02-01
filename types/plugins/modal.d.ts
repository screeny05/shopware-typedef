type SwPluginModalSizing = 'auto' | 'fixed' | 'content' | 'full';
type SwPluginModalMode = 'local' | 'ajax' | 'iframe';
type SwPluginModalContent = string | JQuery | HTMLElement;

interface SwPluginModalOptions {
    mode: SwPluginModalMode;
    sizing: SwPluginModalSizing;
    width: number;
    height: number;
    maxHeight: number;
    overlay: boolean;
    closeOnOverlay: boolean;
    showCloseButton: boolean;
    animationSpeed: number;
    title: string;
    src: string;
    closeKeys: number[];
    keyboardClosing: boolean;
    onClose: () => void;
    updateImages: boolean;
    additionalClass: string;
}

interface SwPluginModal {
    options: SwPluginModalOptions;
    open(content: SwPluginModalContent, options: Partial<SwPluginModalOptions>): void;
    close(): SwPluginModal;
    setTransition(css: any, duration?: number, animation?: string, callback?: Function): void;
    setTitle(title: string): void;
    setContent(content: SwPluginModalContent): void;
    setWidth(width: number | string): void;
    setHeight(height: number | string): void;
    setMaxHeight(height: number | string): void;
    initModalBox(): void;
    registerEvents(): void;
    onKeyDown(event: any): void;
    onWindowResize(event: any): void;
    center(): void;
    onOverlayClose(): void;
    destroy(): void;
}
