import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import App from './App.vue';
import 'element-plus/dist/index.css';
import Router from './router';

const pinia = createPinia();
const app = createApp(App);

app
  .use(pinia)
  .use(Router)
  .use(ElementPlus);

app.mount('#app');
