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
