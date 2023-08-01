<template>
    <header class="p-3 text-bg-dark">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><router-link to="/" class="nav-link px-2 text-white">Home</router-link></li>
                    <li><router-link to="/wishlist" class="nav-link px-2 text-white">Wishlist</router-link></li>
                    <li><router-link to="/wishForm" class="nav-link px-2 text-white">Create</router-link></li>
                </ul>

                <div class="text-end" v-if="!userStore.isLoggedIn">
                    <router-link to="/login" class="btn btn-outline-light me-2">Login</router-link>
                    <router-link to="/join" class="btn btn-warning">Sign-up</router-link>
                </div>
                <div class="text-end" v-else>
                    <button type="button" class="btn btn-outline-light me-2" @click="logOut">Logout</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { useUserStore } from '@/stores/user-store';
import { useRouter } from 'vue-router';

export default {
    setup() {

        const userStore = useUserStore();
        const router = useRouter();

        const logOut = async () => {
            userStore.userName = null;
            alert("로그아웃 되었습니다.");
            router.push('/login');
        };

        return {
            userStore,
            logOut
        }
    }
}
</script>

<style scoped>
ul.horizontal {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

ul.horizontal li {
    float: left;
}

ul.horizontal li a {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

ul.horizontal li a:hover:not(.active) {
    background-color: #000;
}

ul.horizontal li a.active {
    background-color: #04AA6D;
}
</style>