import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import hljsVuePlugin from '@highlightjs/vue-plugin'

createApp(App).use(hljsVuePlugin).mount('#app')
