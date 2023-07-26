<template>
    <div class="container col-xxl-8 px-4 py-5">
        <legend>Wish List</legend>

        <button type="button" class="btn btn-warning"><router-link to="/wishForm">등록</router-link></button>

        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping"><svg width="20" height="20" class="DocSearch-Search-Icon"
                    viewBox="0 0 20 20">
                    <path
                        d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                        stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg></span>
            <input type="text" class="form-control" v-model="searchText" placeholder="Search" aria-label="Search"
                @keyup.enter="searchWish" aria-describedby="addon-wrapping">
        </div>
        <hr />
        <ol class="list-group list-group-numbered mb-3">
            <li class="list-group-item d-flex justify-content-between align-items-start" v-for="wish in  wishlist"
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

        <hr />
        <Pagination v-if="wishlist.length" :numberOfPages="numberOfPages" :currentPage="currentPage" @click="getWishlist" />

    </div>
</template>

<script>
import axios from 'axios';
import { ref, watch, computed } from 'vue';
import Pagination from '@/components/Pagination.vue';

export default {
    components: {
        Pagination
    },
    setup() {
        const wishlist = ref([]);
        const searchText = ref('');
        const numberOfWishs = ref(0);
        let limit = 5;
        const currentPage = ref(1);

        const numberOfPages = computed(() => {
            return Math.ceil(numberOfWishs.value / limit);
        });

        const getWishlist = async (page = currentPage.value) => {
            currentPage.value = page;

            const res = await axios.get(`http://localhost:3000/wishlist?_sort=id&_order=desc&music_like=${searchText.value}&_page=${page}&_limit=${limit}`);
            numberOfWishs.value = res.headers['x-total-count'];
            wishlist.value = res.data;
        }

        getWishlist();

        let timeout = null;
        const searchWish = () => {
            getWishlist();
        }

        watch(searchText, () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                getWishlist();
            }, 1000)
        });

        return {
            getWishlist,
            wishlist,
            searchText,
            searchWish,
            currentPage,
            numberOfPages
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