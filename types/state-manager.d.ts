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
    EventEmitter: SwEventEmitter;
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