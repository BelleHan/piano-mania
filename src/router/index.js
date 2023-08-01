
import { useUserStore } from '@/stores/user-store';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Wishlist from '@/views/Wishlist.vue';
import WishForm from '@/views/WishForm.vue';
import Login from '@/views/Login.vue';
import Join from '@/views/Join.vue';

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
            path: '/wishForm',
            name: 'WishCreate',
            component: WishForm
        },
        {
            path: '/wishForm/:id',
            name: 'WishEdit',
            component: WishForm
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/join',
            name: Join,
            component: Join
        }
    ]
});


router.beforeEach((to, from, next) => {

    const userStore = useUserStore();

    if (to.fullPath !== "/login" && !userStore.isLoggedIn) {

        if (to.fullPath == "/join") {
            next();
        }
        next("/login");
    } else if (to.fullPath == "login" && userStore.isLoggedIn) {
        next("/");
    } else {
        next();
    }
});

export default router;

