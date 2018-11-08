import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import BootstrapVue from 'bootstrap-vue'
import App from './App'

import { store } from './store';
import { routes } from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlayCircle, faPauseCircle, faPodcast, faChartBar, faInfoCircle, faChevronDown, faHeadphones, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots, faListAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([ faPlayCircle, faPauseCircle, faPodcast, faCommentDots, faChartBar, faInfoCircle, faListAlt, faChevronDown, faHeadphones, faTimes ])

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   }
  //   if (to.hash) {
  //     return { selector: to.hash };
  //   }
  //   return {x: 0, y: 0};
  // }
});
Vue.use(VueAnalytics, {
  id: 'UA-128757601-1',
  router
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
