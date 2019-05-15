<template>
  <div class="json-tree">
    <div v-if="theData.constructor === Array">
      <span v-if="root"> [ </span>
      <div class="root_elem" v-for="(value, index) in theData" :key="index">
        <div v-if="typeof value === 'object'">
          <span v-if="value.constructor === Array"> [ </span>
          <span v-else> { </span>

          <span
            v-if="showObj[index]"
            @click="toggle(index)"
            style="cursor:pointer"
          >
            <slot name="hide">-</slot>
          </span>
          <span v-else @click="toggle(index)" style="cursor:pointer">
            <slot name="expand">+</slot>
          </span>

          <v-json-tree
            v-if="showObj[index]"
            :jsonData="value"
            :root="false"
            :fullMarkup="fullMarkup"
            :comma="index !== last"
          >
            <template v-slot:expand>
              <slot name="expand" />
            </template>
            <template v-slot:hide>
              <slot name="hide" />
            </template>
            <template v-slot:more>
              <slot name="more" />
            </template>
          </v-json-tree>
          <slot name="more" v-else>...</slot>
        </div>
        <div v-else>
          <span v-if="fullMarkup && typeof value === 'string'"
            >"{{ value }}"</span
          >
          <span v-else>{{ value }}</span>
          <span v-if="fullMarkup && index !== last">,</span>
        </div>
      </div>
      ]<span v-if="fullMarkup && comma">,</span>
    </div>
    <div v-else>
      <span v-if="root"> { </span>
      <div class="root_elem" v-for="(value, key, index) in theData" :key="key">
        <div v-if="typeof value === 'object'">
          <span v-if="fullMarkup">"</span
          ><span class="json-tree-key">{{ key }}</span
          ><span v-if="fullMarkup">"</span>:
          <span v-if="value.constructor === Array"> [ </span>
          <span v-else> { </span>

          <span
            v-if="showObj[index]"
            @click="toggle(index)"
            style="cursor:pointer"
          >
            <slot name="hide">-</slot>
          </span>
          <span v-else @click="toggle(index)" style="cursor:pointer">
            <slot name="expand">+</slot>
          </span>
          <v-json-tree
            v-if="showObj[index]"
            :jsonData="value"
            :root="false"
            :fullMarkup="fullMarkup"
            :comma="index !== last"
          >
            <template v-slot:expand>
              <slot name="expand" />
            </template>
            <template v-slot:hide>
              <slot name="hide" />
            </template>
            <template v-slot:more>
              <slot name="more" />
            </template>
          </v-json-tree>
          <slot name="more" v-else>...</slot>
        </div>
        <div v-else>
          <span v-if="fullMarkup">"</span
          ><span class="json-tree-key">{{ key }}</span
          ><span v-if="fullMarkup">"</span> :
          <span v-if="fullMarkup && typeof value === 'string'"
            >"{{ value }}"</span
          >
          <span v-else>{{ value }}</span>
          <span v-if="fullMarkup && index !== last">,</span>
        </div>
      </div>
      }<span v-if="fullMarkup && comma">,</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "vJsonTree",
  props: {
    jsonData: [Object, Array],
    root: {
      type: Boolean,
      default: true
    },
    filterKey: {
      type: String,
      default: ""
    },
    fullMarkup: {
      type: Boolean,
      default: false
    },
    comma: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    theData() {
      const filterKey = this.filterKey && this.filterKey.toLowerCase();
      if (filterKey) {
        let filteredData = {};
        const keys = Object.keys(this.jsonData);
        keys.forEach(key => {
          if (
            key.toLowerCase().includes(filterKey) ||
            JSON.stringify(this.jsonData[key]).includes(filterKey)
          ) {
            filteredData[key] = this.jsonData[key];
          }
        });
        return filteredData;
      } else {
        return this.jsonData;
      }
    },
    last() {
      return Object.keys(this.theData).length - 1;
    }
  },
  data() {
    const showObj = [];
    const len = Object.keys(this.jsonData).length;
    for (let i = 0, l = len; i < l; i++) {
      showObj.push(true);
    }

    return {
      showObj: showObj
    };
  },
  methods: {
    toggle(index) {
      this.showObj[index] = !this.showObj[index];
      this.showObj.splice(index, 1, this.showObj[index]);
    }
  }
}
</script>

<style>
.root_elem {
  margin-left: 25px;
}
</style>
