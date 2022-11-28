import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFeather from 'vue-feather';

createApp(App)
    .use(store)
    .use(router)
    .component(VueFeather.name, VueFeather)
    .mount('#app')
