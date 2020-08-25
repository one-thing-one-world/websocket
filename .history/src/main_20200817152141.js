import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO  from 'vue-socket.io';

import socketio from 'socket.io-client';

// Vue.use(VueSocketio, socketio('xxx:80'));
Vue.use(new VueSocketIO ({
  debug: true,
  // 服务器端地址
  connection: `http://localhost:5005`,
  vuex: {
  }
}))
  


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
