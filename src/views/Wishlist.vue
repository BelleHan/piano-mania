<template>
    <h1>Wishlist</h1><br />
    <div v-for="wish in wishlist.data" :key="wish.id">
        {{ wish.music }}
        {{ wish.musician }}
        {{ wish.genre }}
        {{ wish.dueDate }}
        {{ wish.isRecord }}
    </div>
    <div class="links">
        <router-link to="/wishCreate">등록</router-link>
        <router-link to="/wishEdit">수정</router-link>
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