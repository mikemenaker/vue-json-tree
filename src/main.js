import JsonTreeComp from './Components/JsonTree.vue'

const JsonTree = {
    install(Vue, options = {}) {        
        Vue.component('json-tree', JsonTreeComp)
    },
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(JsonTree);
}

window.JsonTree = JsonTree

export { JsonTree }
export default JsonTree
