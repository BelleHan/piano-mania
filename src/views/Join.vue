<template>
    <div class="form-signup">
        <form class="needs-validation" @submit="signUp">
            <h5>Sign up</h5>
            <div class="row g-3">
                <div class="col-sm-6">
                    <label for="firstName" class="form-label">First name</label>
                    <input type="text" class="form-control" id="firstName" v-model="member.firstName" placeholder=""
                        required="">
                    <div class="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>

                <div class="col-sm-6">
                    <label for="lastName" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="lastName" v-model="member.lastName" placeholder=""
                        required="">
                    <div class="invalid-feedback">
                        Valid last name is required.
                    </div>
                </div>

                <div class="col-12">
                    <label for="username" class="form-label">Username</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text">@</span>
                        <input type="text" class="form-control" id="username" v-model="member.userName"
                            placeholder="Username" required="">
                        <div class="invalid-feedback">
                            Your username is required.
                        </div>
                    </div>
                </div>

                <div class="col-12">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" v-model="member.email"
                        placeholder="you@example.com">
                    <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                    </div>
                </div>

                <div class="col-12">
                    <label for="address" class="form-label">Password</label>
                    <input type="password" class="form-control" id="address" v-model="member.password"
                        placeholder="Password" required="">
                    <div class="invalid-feedback">
                        Please enter your password.
                    </div>
                </div>
            </div>

            <hr class="my-4">

            <button class="w-100 btn btn-primary btn-lg" type="submit">Sign up</button>
        </form>

    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const member = ref({
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: ''
        });

        const signUp = async () => {

            const data = {
                firstName: member.value.firstName,
                lastName: member.value.lastName,
                userName: member.value.userName,
                email: member.value.email,
                password: member.value.password
            }

            axios.post('http://localhost:3000/member', data);
            alert('회원가입이 완료되었습니다.');
            router.push('/login');

        };

        return {
            member,
            signUp
        }
    }
}
</script>

<style  scoped>
.form-signup {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px !important;
    margin-bottom: 100px !important;
}

form {
    width: 500px;
}

h5 {
    font-size: 35px;
    margin-bottom: 20px;
}
</style>