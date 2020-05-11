<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Toucan Object explorer</h1>
    <h2>Test by Hadhemi Laouini</h2>

    <SimpleObj v-model="obj"/>

  </div>
</template>

<script>
  import SimpleObj from "./components/SimpleObj";

  export default {
    components: {SimpleObj},
    component: SimpleObj,
    name: 'app',
    data () {
      return {
        parsed : [],
        obj: {
          something: {
            key1: {
              nested: "really"
            },
            other: "hey"
          },
          stuff: "yeah"
        }
        // If the object changes, your code should work
        // obj: {
        //   somethingElse: {
        //     key2: {
        //       nested: {
        //         more: "nesting"
        //       }
        //     },
        //     hop: "hophop"
        //   },
        //   yipeee: "yeah"
        // }

      }
    },
    created(){

    },
    methods: {

    }
  }
</script>

<style lang="css">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style: none;
  }
  a {
    color: #42b983;
  }
</style>
