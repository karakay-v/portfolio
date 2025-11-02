import { createWebHistory, createRouter, type RouteLocationNormalizedLoaded } from 'vue-router'

import Portfolio from './components/pages/Portfolio.vue';
import Open from './components/redirects/Open.vue';

const routes = [
    {
        path: '/portfolio',
        component: Portfolio,
    },
    { 
        path: '/',
        redirect: '/portfolio',
    },
    {
        path: '/resume',
        component: Open,
        props: {
            path: '/CV/Karakai-V_CV-EN.pdf', 
            timeout: 1000,
        },
        alias: [ '/cv', ],
    },
    {
        path: '/redirect',
        component: Open,
        props: (route: RouteLocationNormalizedLoaded) => ({
            path: route.query.to,
            timeout: 500,
        }),
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
