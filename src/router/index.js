import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Wishlist from '@/views/Wishlist.vue';
import WishCreate from '@/views/WishCreate.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        // 배열 안에 하나의 객체가 하나의 라우트를 뜻함
        {
            path: '/', //url
            name: 'Home',
            component: Home
        },
        {
            path: '/wishlist',
            name: 'Wishlist',
            component: Wishlist
        },
        {
            path: '/wishCreate',
            name: 'wishCreate',
            component: WishCreate
        },
    ]
});

export default router;