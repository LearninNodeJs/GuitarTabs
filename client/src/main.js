// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import AlertComponent from '@/components/shared/Alert'
import {sync} from 'vuex-router-sync'
import store from  './store/store'

Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.component('app-alert',AlertComponent);

sync(store,router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
