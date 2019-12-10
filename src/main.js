import Vue from 'vue'
import App from './App.vue'
import VueSocketIo from 'vue-socket.io'

Vue.config.productionTip = false

Vue.use(new VueSocketIo({
    debug: true,
    connection: 'http://localhost:4001'
}));

new Vue({
  render: h => h(App),
}).$mount('#app')
