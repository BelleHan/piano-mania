<template>
  <div>Wish Create</div>
  <form @submit="saveWish">
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
    <input type="radio" id="notRecordYet" v-model="wish.isRecord" value="N" checked>
    <label for="notRecordYet">Not record yet</label>
    <input type="radio" id="recorded" v-model="wish.isRecord" value="Y">
    <label for="recorded">Recorded</label><br />

    <div v-if="editMode">
      <button type="submit">수정</button>
      <button type="button" @click="deleteWish">삭제</button>
      <button type="button" @click="goList">취소</button>
    </div>
    <div v-else>
      <button type="submit">등록</button>
      <button type="button" @click="goList">취소</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    let editMode = ref(false);

    const wish = ref({
      musician: '',
      music: '',
      genre: '',
      dueDate: '',
      isRecord: 'N'
    });
    const genreList = ref({});

    const getWish = async () => {
      const res = await axios.get(`http://localhost:3000/wishlist/${route.params.id}`);

      wish.value = { ...res.data };
      editMode.value = true;

    }

    if (route.params.id != undefined) getWish();

    const getGenreList = async () => {
      genreList.value = await axios.get('http://localhost:3000/genreList')
    }

    getGenreList();

    const goList = async () => {
      router.push('/wishlist');
    }

    const saveWish = async () => {

      const data = {
        musician: wish.value.musician,
        music: wish.value.music,
        genre: wish.value.genre,
        dueDate: wish.value.dueDate,
        isRecord: wish.value.isRecord
      }

      if (editMode.value) {
        await axios.put(`http://localhost:3000/wishlist/${route.params.id}`, data);
        alert('수정되었습니다.');
      } else {
        await axios.post('http://localhost:3000/wishlist', data);
        alert('등록되었습니다.');
      }

    }

    const deleteWish = async () => {
      await axios.delete(`http://localhost:3000/wishlist/${route.params.id}`);

      alert('삭제되었습니다.');
      goList();
    }

    return {
      editMode,
      wish,
      getWish,
      goList,
      saveWish,
      deleteWish,
      genreList,
      getGenreList
    }
  }
}
</script>

<style scoped></style>