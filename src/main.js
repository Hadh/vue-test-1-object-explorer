import Vue from 'vue'
import App from './App.vue'
import SimpleObj from "./components/SimpleObj.vue";

Vue.component(SimpleObj)

new Vue({
  el: '#app',
  render: h => h(App)
})
