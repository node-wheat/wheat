import Vue from 'vue/dist/vue.common.dev'
import Element from 'element-ui'
import App from './App.vue'

Vue.use(Element);

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  render () {
    return <App/>
  }
});