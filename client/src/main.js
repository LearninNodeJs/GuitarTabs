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
import CardComponent from '@/components/shared/Card'
import VueYouTubeEmbed from 'vue-youtube-embed'
import SnackBar from '@/components/shared/SnackBar'

Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(VueYouTubeEmbed);
Vue.component('app-alert',AlertComponent);
Vue.component('card-component',CardComponent);
Vue.component('snack',SnackBar);


sync(store,router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
