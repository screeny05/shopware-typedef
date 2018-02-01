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
        this.applyDataAttributes();
        this.foobar();
        this._destroy();
    }
    foobar(): void {
        console.log('hello, world!');
    }
}

$.plugin('bitFlyout', Flyout.prototype);

declare global {
    interface JQuery { bitFlyout(options?: Partial<FlyoutOptions>): JQuery; }
    interface SwPluginsCollection { bitFlyout: Flyout; }
}

PluginsCollection.bitFlyout.defaults.foobar = 'asd';





interface ScnFooOptions {
    width: number;
    height: number;
}

export class ScnFoo extends $.PluginBase implements SwPluginDefinition {
    defaults: ScnFooOptions = {
        width: 100,
        height: 200
    }
    init(){
        console.log('scnFoo');
    }
}

$.plugin('scnFoo', ScnFoo);

declare global {
    interface JQuery { scnFoo(): JQuery; }
    interface SwPluginsCollection { scnFoo: SwPluginPrototypeConstructor<ScnFoo, Partial<ScnFooOptions>>; }
}


// make sure to only send one element to the constructor
const $el = $('.js--foo').eq(0);
const x = new PluginsCollection.scnFoo('scnFoo', $el, {
    height: 12
});

declare global {
    interface SwStateManager { addPlugin(selector: string, pluginName: 'scnFoo', config?: Partial<ScnFooOptions>, viewport?: string[] | string): this; }
}

StateManager.addPlugin('.foo', 'scnFoo', { height: 1 });

// extend/modify defaults
// if you would extend the options in another file, than the one defining
// ScnFooOptions, you'd need the `declare global`. As we're in the same
// file, it works without.

//declare global {
    interface ScnFooOptions { bar?: string; }
//}

PluginsCollection.scnFoo.prototype.defaults.height = 999;
PluginsCollection.scnFoo.prototype.defaults.bar = 'quxbaz';

// VS Code & IntelliJ don't like this
// Atom is just fine
$.plugin('scnBar', {
    /**
     * @typedef {object} ScnFooOptions
     * @property {string} name
     * @property {number} width
     */
    defaults: {
        name: 'bar',
        width: 100
    },
    init: function(){
        /** @type {SwPluginPrototype} */
        var me = this;

        me.applyDataAttributes();

        /** @type {ScnFooOptions} */
        var opts = me.opts;

        opts.name.length;
    },
});

/** @type {SwStateManager} */
var sman = {};

sman.[...] // intellisense available
