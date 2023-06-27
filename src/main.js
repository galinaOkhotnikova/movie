import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import './style.scss'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


createApp(App).use(createPinia()).use(router).mount('#app')
