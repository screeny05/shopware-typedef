export interface FlyoutOptions {
    foobar: string;
    quxbaz: number;
}

export class Flyout extends $.PluginBase implements SwPluginDefinition {
    defaults: FlyoutOptions = {
        foobar: '',
        quxbaz: 12
    }
    init() {
        this.foobar();
        this._destroy();
    }
    foobar(): void {
        console.log('hello, world!');
    }
}

$.plugin('bitFlyout', Flyout.prototype);

declare global {
    interface JQuery {
        bitFlyout(options?: Partial<FlyoutOptions>): JQuery;
    }
    interface SwPluginsCollection {
        bitFlyout: Flyout;
    }
}
