import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// echarts
import * as ECharts from 'echarts'
import VueEcharts from 'vue-echarts'

import './plugins/element'
import 'element-ui/lib/theme-chalk/index.css'

// vant h5rem适配
import 'amfe-flexible/index.js'
import './plugins/vant'

// iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

Vue.prototype.$echarts = ECharts
Vue.component('v-chart', VueEcharts)

Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  axios,
  render: h => h(App),
}).$mount('#app')
