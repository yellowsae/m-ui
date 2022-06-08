import Vue from 'vue'
import App from './App.vue'

import "../UI/packages/css/button.scss"
import Button from '../UI/packages/button/index'
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
