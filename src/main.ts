import { createApp } from 'vue';
import App from './App.vue';
import VueScrollTo from 'vue-scrollto';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { router } from './router';

AOS.init();

const app = createApp(App)

app.use(router)
app.use(VueScrollTo);
app.use(FloatingVue);
app.use(
    Vue3Toastify,
    {
        autoClose: 3000,
    } as ToastContainerOptions,
)

app.mount('#app')
