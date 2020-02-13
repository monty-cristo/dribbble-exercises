import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faWallet, faSlidersH, faBars, faSearch, faPlus, faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faUser, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

library.add(faWallet, faCircle, faBars, faSlidersH, faUser, faSearch, faCalculator, faPlus, faPaperPlane);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
