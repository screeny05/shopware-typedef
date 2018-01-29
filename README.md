# shopware-typedef

> Shopware Typescript typings

```bash
npm install --save-dev shopware-typedef
```

In your code it should probably look something like this:

```typescript
/// <reference types="shopware-typedef"/>

export class ScnFoo extends $.PluginBase implements SwPluginDefinition {
    init(){
        console.log('hello, world!');
    }
}

$.plugin('scnFoo', ScnFoo.prototype);

declare global {
    interface JQuery { scnFoo(): JQuery }
    interface SwPluginsCollection { scnFoo: ScnFoo }
}
```

And that's about all to do for adding a plugin. Have a look into the example.ts for more help.

Also, be aware that you can't yet pass `$.plugin()` a constructor as a second argument. There's already an issue at shopware for that: [#1489](https://github.com/shopware/shopware/pull/1489)

