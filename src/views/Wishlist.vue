<template>
    <legend>Wish List</legend>

    <ol class="list-group list-group-numbered mb-3">
        <li class="list-group-item d-flex justify-content-between align-items-start" v-for="wish in  wishlist.data"
            :key="wish.id">
            <div class="ms-2 me-auto">
                <router-link :to="`/wishForm/${wish.id}`">
                    <div class="fw-bold">{{ wish.music }}</div>
                    {{ wish.musician }}
                </router-link>
            </div>
            <span class="badge bg-primary rounded-pill">{{ wish.genre }}</span>
        </li>
    </ol>

    <div class="links">
        <router-link class="btn btn-primary" to="/wishForm">등록</router-link>
    </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {

    setup() {
        const wishlist = ref([]);

        const getWishlist = async () => {
            wishlist.value = await axios.get('http://localhost:3000/wishlist');
        }

        getWishlist();

        return {
            getWishlist,
            wishlist
        }
    }
}
</script>

<style>
.links {
    display: flex;
}

.links a {
    flex: 1;
    font-size: 20px;
    text-align: center;
    line-height: 2;
}
</style>