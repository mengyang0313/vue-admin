import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './router/auth'
import './api/api'

import './assets/icon-fonts/iconfont.css'
import './assets/icon-fonts/iconfont'
import 'element-ui/lib/theme-chalk/index.css'
import audio from 'vue-mobile-audio'
import ElementUI from 'element-ui'

Vue.use(audio)
Vue.use(ElementUI, {size: 'small'})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

