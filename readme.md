# @panoply/11ty (Type Support)

Shareable [Eleventy](https://www.11ty.dev/) configuration strap. The module can be dropped in to your `.eleventy.js` configuration file for Typed supported configuration options.

### Why?

Type support is assumed nowadays and when modules don't provide this basic capability it makes life difficult and reflects poorly on otherwise good projects (like Eleventy). The team behind Eleventy has floated type support but seem hesitant and from my understanding were considering using JSDoc types. We are not animals. We live in a society.

##### References

- https://github.com/11ty/eleventy/issues/2317
- https://github.com/11ty/eleventy/pull/2091
- https://github.com/11ty/eleventy/pull/720
- https://github.com/11ty/eleventy/issues/814

# Install

The module requires [@11ty/eleventy](https://www.npmjs.com/package/@11ty/eleventy) be installed along side it.

```cli
pnpm add @panoply/11ty @11ty/eleventy -D
```

> The `@11ty/eleventy` module is a peer. You need to install it.

# Usage

Pass it to the `module.exports` within a `.eleventy.js` or `.eleventy.cjs` configuration file.

<!-- prettier-ignore -->
```ts
const eleventy = require("@panoply/11ty");

module.exports = eleventy(function(config) {

  config.setBrowserSyncConfig();
  config.addPlugin()

  return {
    htmlTemplateEngine: 'liquid',
    passthroughFileCopy: false,
    pathPrefix: '',
    templateFormats: [
      'liquid',
      'json',
      'md',
      'css',
      'html',
      'yaml'
    ],
    dir: {
      input: 'site',
      output: 'public',
      includes: 'views/include',
      layouts: 'views/layouts',
      data: 'data'
    }
  }
});
```

### Typed Plugins

Due to the way Eleventy digests plugins, Type support is rather difficult to apply without manually including plugins and comparing `typeof` which is a real mess. I am open to ideas if folks have any because without complete typed support leveraging Eleventy is like taming a wild beast.

### License

[MIT](#LICENSE)
