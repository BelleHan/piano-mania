<template>
  <div>Wish Create</div>
  <form @submit="createWish">
    <label>음악가</label>
    <input type="text" v-model="wish.musician" /><br />
    <label>곡명</label>
    <input type="text" v-model="wish.music" /><br />
    <label>장르</label>
    <select v-model="wish.genre">
      <option v-for="genre in genreList.data" :key="genre.id">{{ genre.genre }}</option>
    </select><br />
    <label>완주목표기간</label>
    <input type="date" v-model="wish.dueDate" /><br />
    <label>녹음여부</label>
    <input type="radio" id="notRecordYet" v-model="wish.isRecord" value="false" checked>
    <label for="notRecordYet">Not record yet</label>
    <input type="radio" id="recorded" v-model="wish.isRecord" value="true">
    <label for="recorded">Recorded</label><br />
    <button type="submit">등록</button>
  </form>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute();

    console.log(route.params.id);

    const wish = ref({
      musician: '',
      music: '',
      genre: '',
      dueDate: '',
      isRecord: ''
    });
    const genreList = ref({});

    const getWish = async () => {
      await axios.get(`http://localhost:3000/wishlist/${route.params.id}`);
    }

    if (route.params.id != undefined) {
      getWish();
      console.log(getWish());
    }

    const createWish = async () => {

      const data = {
        musician: wish.value.musician,
        music: wish.value.music,
        genre: wish.value.genre,
        dueDate: wish.value.dueDate,
        isRecord: wish.value.isRecord
      }

      await axios.post('http://localhost:3000/wishlist', data)

    }

    const getGenreList = async () => {
      genreList.value = await axios.get('http://localhost:3000/genreList')
      console.log(genreList)
    }

    getGenreList();

    return {
      wish,
      getWish,
      createWish,
      genreList,
      getGenreList
    }
  }
}
</script>

<style scoped></style>