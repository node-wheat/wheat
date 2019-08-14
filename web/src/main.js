import Vue from 'vue/dist/vue.common.dev';
import Element from 'element-ui';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);

export default new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
  render() {
    return <App/>;
  },
});
