/* global Vue */

import '@/styles/base.scss'

/* weex initialized here, please do not move this line */
// const router = require('./router')
// const App = require('@/index.vue')
import router from '@/router'
import App from '@/index.vue'
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router }, App))
router.push('/')
