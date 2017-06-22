if (typeof Vue != 'undefined') {
    Vue.component('json-tree', {
        template: `<div>
                    {
                    <div style="margin-left: 25px" v-for="(value, key, index) in filteredData">
                      <div v-if="typeof value === 'object'">
                        <span class="key">{{key}}: </span>      
                        <i v-if="showObj[index]" @click="toggle(index)" class="fa fa-minus-square-o"></i>
                        <i v-else @click="toggle(index)" class="fa fa-plus-square-o"></i>
                        <json-tree v-if="showObj[index]" :data=value></json-tree>
                        <i v-else class="fa fa-ellipsis-h"></i>
                      </div>
                      <div v-else>
                        <template v-if="data.constructor === Array">
                          {{value}}
                        </template>
                        <template v-else>
                          <span class="key">{{key}}</span> : {{value}}
                        </template>
                      </div>
                    </div>
                    }
                  </div>`,
        props: {
            data: [Object, Array],
            filterKey: {
                type: String,
                default: ""
            }
        },
        data() {
            const showObj = [];
            const len = Object.keys(this.data).length;
            for (let i = 0, l = len; i < l; i++) {
                showObj.push(true);
            }

            return {
                showObj: showObj
            }
        },
        computed: {
            filteredData() {
                const filterKey = this.filterKey && this.filterKey.toLowerCase();
                if (filterKey) {
                    let filteredData = {};
                    const keys = Object.keys(this.data);
                    keys.forEach(key => {
                        if (key.toLowerCase().includes(filterKey) || JSON.stringify(this.data[key]).includes(filterKey)) {
                            filteredData[key] = this.data[key];
                        }
                    });
                    return filteredData;
                } else {
                    return this.data;
                }
            }
        },
        methods: {
            toggle(index) {
                this.showObj[index] = !this.showObj[index];
                this.showObj.splice(index, 1, this.showObj[index]);
            }
        }
    });
}