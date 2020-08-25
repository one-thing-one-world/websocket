import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketio from 'vue-socket.io';

import socketio from 'socket.io-client';

// Vue.use(VueSocketio, socketio('xxx:80'));
Vue.use(new VueSocketIO({

        debug: true,
  
        connection: 'socket地址:端口号',
  
        vuex: {       // 不需要用到vuex这个可以不加
  
              store,
  
              actionPrefix: 'SOCKET_',
  
              mutationPrefix: 'SOCKET_'
  
        }
  
  }))
  


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
