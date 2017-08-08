# vue-json-tree
Vue.js 2.0 JSON tree viewer

[![GitHub release](https://img.shields.io/github/release/mikemenaker/vue-json-tree.svg)]() [![license](https://img.shields.io/github/license/mikemenaker/vue-json-tree.svg)]()

# vue-json-tree
Vue.js 2.0 JSON tree viewer

## Demo:

https://jsfiddle.net/mikemenaker/wzfyz5hr/

## Installation:

``` html
<script src="https://cdn.rawgit.com/mikemenaker/vue-json-tree/1.0.1/src/v-json-tree.js"></script>
```

## Installation
### With npm:
```bash
npm i <v-json-tree> --save
```

### With a CDN:
```html
<!-- In <body>, after Vue import -->
<script src="https://unpkg.com/v-json-tree/dist/v-json-tree.js"></script>
```

## Usage
### With an ES6 bundler (via npm)
In your index file
```js
import JsonTree from 'v-json-tree'
```

### With a CDN
```html
<script>
    Vue.use(v-json-tree)

    new Vue({
        // ...
    })
</script>
```

## Tab Props:
 - data
	 - Object/Array
   - Data to format into tree
 - filterKey
	 - String
   - String to filter data
