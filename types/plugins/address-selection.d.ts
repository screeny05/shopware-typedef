interface SwPluginAddressSelectionOptions {
    id: null | number;
    formSelector: string;
    width: string;
    height: string;
    sizing: SwPluginModalSizing;
    sessionKey: string;
    setDefaultBillingAddress: null | boolean;
    setDefaultShippingAddress: null | boolean;
}

interface SwPluginAddressSelection {
    _previousOptions: SwPluginAddressSelectionOptions;
    getEventName(event: string): string;
    openPrevious(): void;
    open(options: Partial<SwPluginAddressSelectionOptions>): void;
    onSave($modal: JQuery, response: any): void;
}