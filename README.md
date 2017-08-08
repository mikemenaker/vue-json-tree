# vue-json-tree
Vue.js 2.0 JSON tree viewer

[![GitHub release](https://img.shields.io/github/release/mikemenaker/vue-json-tree.svg)]() [![license](https://img.shields.io/github/license/mikemenaker/vue-json-tree.svg)]()

# vue-json-tree
Vue.js 2.0 JSON tree viewer

## Demo:

https://jsfiddle.net/mikemenaker/wzfyz5hr/

## Installation
### With npm:
```bash
npm i v-json-tree --save
```

### With a CDN:
```html
<!-- In <head> -->
<meta rel="stylesheet" href="https://unpkg.com/v-json-tree/dist/v-json-tree.css">
<!-- In <body>, after Vue import -->
<script src="https://unpkg.com/v-json-tree/dist/v-json-tree.js"></script>
```

## Usage
### With an ES6 bundler (via npm)
In your index file
```js
import JsonTree from 'v-json-tree'
Vue.use(JsonTree)
```

### With a CDN
```html
<script>
    Vue.use(JsonTree)

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
