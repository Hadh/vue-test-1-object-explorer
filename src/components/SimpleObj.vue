<template>
  <div>
    <ul>
    <template v-for=" (value,key) in anotherObject" >
      <template v-if="isObject(value)">
        <li :key="key">{{key}} : {</li>
          <SimpleObj v-model="anotherObject[key]"/>
       <li>}</li>
      </template>
      <template v-else>
        <li :key="key">{{key}} : <input @input="valueChanged" type="text" v-model="anotherObject[key]"></li>
      </template>
    </template>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'SimpleObj',
    props: ['value'],
    data() {
      return {
        anotherObject: this.value
      }
    },
    computed: {},
    methods: {
      isObject(ob) {
        return typeof ob == "object"
      },
      valueChanged () {
        this.$emit('input',this.anotherObject)
      }
    }
  }
</script>

