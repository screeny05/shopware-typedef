# shopware-typedef

> Shopware TypeScript typings

This package contains TypeScript type definitions for the Shopware 5 Frontend.

That includes correct types for the StateManager and other globals, `jQuery.X` and `jQuery.fn.X` extended by Shopware.

The type definitions can be used from TypeScript but also from JavaScript.


## Installation

```bash
npm install --save-dev @types/jquery@2.x shopware-typedef
```


## Usage

In TypeScript code it should look like this:

```typescript
/// <reference types="shopware-typedef"/>

export class ScnFoo extends $.PluginBase implements SwPluginDefinition {
    init(){
        console.log('hello, world!');
    }
}

$.plugin('scnFoo', ScnFoo);

declare global {
    interface JQuery { scnFoo(): JQuery; }
    interface SwPluginsCollection { scnFoo: SwPluginPrototypeConstructor<ScnFoo>; }
}
```

The type `SwPluginPrototypeConstructor` is a constructor-interface for all classes extending `$.PluginBase` accepting a type `T` which indicates what you want to return. And a type `U` indicating the type of the options if any.

The constructor itself has the signature `new(name: string, element: JQuery, options?: U): T`.

If you use plain JavaScript you can still use the typings in an IDE that supports it (Atom, VS Code, PHPStorm, etc.)

```javascript
/// <reference types="shopware-typedef"/>

StateManager.addPlugin('.js--foo', 'bar');
```

You can use annotations in your JavaScript to tell your IDE what type your variables are, for example:

```javascript
/** @type {SwStateManager} */
var sman;

sman.[...] // intellisense support enabled

$.plugin('scnBar', {
    /**
     * @typedef {object} ScnBarOptions
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

        /** @type {ScnBarOptions} */
        var opts = me.opts;
    },
});
```

Support may vary depending on your IDE.

More Info is available in the [TypeScript Wiki](https://github.com/Microsoft/TypeScript/wiki/JSDoc-support-in-JavaScript).


### Options

You can pass the type of your plugin options as a generic to `$.PluginBase<T>`

```typescript
interface ScnFooOptions {
    width: number;
    height: number;
}

export class ScnFoo extends $.PluginBase<ScnFooOptions> implements SwPluginDefinition {
    defaults: ScnFooOptions = {
        width: 100,
        height: 200
    }
    init(){
        this.applyDataAttributes();
        this.opts.[...] // intellisense now available for opts
    }
}

$.plugin('scnFoo', ScnFoo);

declare global {
    interface JQuery { scnFoo(options?: Partial<ScnFooOptions>): JQuery; }
    interface SwPluginsCollection { scnFoo: SwPluginPrototypeConstructor<ScnFoo, Partial<ScnFooOptions>>; }
}
```

And that's about all to do for adding a plugin. Have a look into the example.ts for more help.

If you want to, you can also add a new declaration for the `StateManager.addPlugin` call, although it may not always work correctly.

```typescript
declare global {
    interface SwStateManager {
        addPlugin(selector: string, pluginName: 'scnFoo', config?: Partial<ScnFooOptions>, viewport?: string[] | string): this;
    }
}

StateManager.addPlugin('.js--foo', 'scnFoo', { width: 150 });
```


## Notes

The declare global-block is necessary for all Plugins in order to get typescript to understand, that we've extended `window.$` and `window.PluginsCollection`

Be aware, that there was a Bug in the Shopware `$.plugin()`-implementation preventing developers from passing a constructor as the second argument. The Issue has been resolve in Shopware@5.5. This is the PR for that: [#1489](https://github.com/shopware/shopware/pull/1489)

Prior sw-versions need to provide not the Class itself, but the prototype.

```typescript
interface ScnFooOptions {
    width: number;
    height: number;
}

export class ScnFoo extends $.PluginBase<ScnFooOptions> implements SwPluginDefinition {
    defaults: ScnFooOptions = {
        width: 100,
        height: 200
    }
    init(){
        this.applyDataAttributes();
        this.opts.[...] // intellisense now available for opts
    }
}

$.plugin('scnFoo', ScnFoo.prototype);

declare global {
    interface JQuery { scnFoo(options?: Partial<ScnFooOptions>): JQuery; }
    interface SwPluginsCollection { scnFoo: ScnFoo; }
}
```


## Contributions
Always welcome 💙

## License
[MIT](./LICENSE)
