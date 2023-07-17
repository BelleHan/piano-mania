import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Wishlist from '@/views/Wishlist.vue';

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
            path: '/wishlsit',
            name: 'Wishlist',
            component: Wishlist
        },
        {
            path: '/todos/:id', // 파라미터를 넣고 싶은 경우 ':변수명' 사용, 
            //route를 만들때는 _변수명.vue 사용
            name: 'Todo',
            component: Todo
        }
    ]
});

export default router;