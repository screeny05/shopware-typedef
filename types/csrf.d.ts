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

interface SwCsrfConfig {
    basePath: string;
    generateUrl: string;
    shopId: string;
}