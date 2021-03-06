import Vue from 'vue'
import App from './App.vue'

import "../UI/css/button.scss"
import Button from '../UI/packages/button/index'
import Badge from '../UI/packages/badge/index'
import "../UI/css/badge.scss"


Vue.use(Badge)
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
