<template>
    <main class="form-signin w-100 m-auto">
        <form @submit.prevent="signIn">
            <img class="mb-4" src="/src/assets/icon/mini_piano.png" alt="" width="72" height="57">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" v-model="loginData.email"
                    placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" v-model="loginData.password"
                    placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>
            <!-- 
            <div class="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                </label>
            </div> -->
            <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        </form>
    </main>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import _ from 'lodash';
import { useUserStore } from '@/stores/user-store.js';

export default {
    setup() {
        const router = useRouter();
        const userStore = useUserStore();

        const loginData = ref({
            email: '',
            password: ''
        })

        const signIn = async () => {

            const data = {
                email: loginData.value.email,
                password: loginData.value.password
            }

            const res = await axios.get(`http://localhost:3000/member?email=${loginData.value.email}`);

            if (_.isEqual(data.password, res.data[0].password)) {

                userStore.userName = res.data[0].userName;
                // userStore.setCookie();
                // console.log(userStore.getCookie());
                if (userStore.isLoggedIn) {
                    router.push('/');
                }

            } else {
                alert('잘못된 이메일 혹은 비밀번호입니다.');
            }
        };

        return {
            loginData,
            signIn
        }
    }

}
</script>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px !important;
    margin-bottom: 100px !important;
}

form {
    width: 300px;
}
</style>