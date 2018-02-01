interface SwPluginLightbox {
    modal: boolean|any;
    open(imageURL: string): void;
    createContent(imageURL: string): JQuery;
    setSize(width: number, height: number): void;
    getOptimizedSize(width: number, height: number): { width: number; height: number; };
}
