<template>
    <div>Wish List</div><br />
    <!-- <ul>
        <li v-for="wish in  wishlist.data " :key="wish.id">
            <router-link :to="`/wishForm/${wish.id}`">
                {{ wish.music }}
                {{ wish.musician }}
                {{ wish.genre }}
                {{ wish.dueDate }}
                {{ wish.isRecord }}
            </router-link>
        </li>
    </ul> -->
    <div class="links">
        <router-link to="/wishForm">등록</router-link>
    </div>

    <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start" v-for="wish in  wishlist.data"
            :key="wish.id">
            <router-link :to="`/wishForm/${wish.id}`">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{{ wish.music }}</div>
                    {{ wish.musician }}
                </div>
                <span class="badge bg-primary rounded-pill">{{ wish.genre }}</span>
            </router-link>
        </li>
        <!-- <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">Subheading</div>
                Content for list item
            </div>
            <span class="badge bg-primary rounded-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">Subheading</div>
                Content for list item
            </div>
            <span class="badge bg-primary rounded-pill">14</span>
        </li> -->
    </ol>
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