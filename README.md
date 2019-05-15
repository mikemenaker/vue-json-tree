# vue-json-tree
Vue.js 3.0 JSON tree viewer

[![GitHub release](https://img.shields.io/github/release/mikemenaker/vue-json-tree.svg)]() [![license](https://img.shields.io/github/license/mikemenaker/vue-json-tree.svg)]()

# vue-json-tree
Vue.js 3.0 JSON tree viewer

## Demo:

https://jsfiddle.net/mikemenaker/8zxwavrk/

## Installation
### With npm:
```bash
npm i v-json-tree --save
```

### With a CDN:
```html
<!-- In <body>, after Vue import -->
<script type="text/javascript" src="https://unpkg.com/v-json-tree/dist/vJsonTree.umd.js"></script>
```

## Usage
### With an ES6 bundler (via npm)
In your component file
```js
import vJsonTree from "v-json-tree";
```

Then register:
```
components: {
    vJsonTree
  },
```

### With a CDN
```html
<script>
    Vue.component("v-json-tree", vJsonTree);

    new Vue({
        // ...
    })
</script>
```

## Props:
 - data <Object/Array>
    Data to format into tree
 - filterKey <String>
    String to filter data
 - fullMarkup <Boolean>
    If full mark up is need (quotes and commas)

## Slots:
 - hide
    What should be used for the hide button
 - expand
    What should be used for the expand button
 -more
    What should be used for the elipsis when an object/array is hidden

