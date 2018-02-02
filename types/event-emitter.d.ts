interface SwEventEmitter {
    on<T>(eventName: string, callback: (this: T, ...args: any[]) => void, context?: T): this;
    once<T>(eventName: string, callback: (this: T, ...args: any[]) => void, context?: T): this;
    off(eventName: string, callback?: Function, context?: any): this;
    trigger(eventName: string, ...args: any[]): this;
    destroy(): void;
}
