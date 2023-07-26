<template>
  <div class="container col-xxl-8 px-4 py-5">
    <legend>Wish Create</legend>
    <form @submit="saveWish">
      <div class="mb-3">
        <label class="form-label">음악가</label>
        <input type="text" class="form-control" v-model="wish.musician" />
      </div>
      <div class="mb-3">
        <label class="form-label">곡명</label>
        <input type="text" class="form-control" v-model="wish.music" />
      </div>
      <div class="mb-3">
        <label class="form-label">장르</label>
        <select v-model="wish.genre" class="form-select">
          <option v-for="genre in genreList.data" :key="genre.id">{{ genre.genre }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">완주목표기간</label>
        <input type="date" class="form-control" v-model="wish.dueDate" />
      </div>
      <div class="mb-3">
        <label class="form-label">녹음여부</label><br />
        <div class="form-check form-check-inline">
          <input type="radio" class="form-check-input" id="notRecordYet" v-model="wish.isRecord" value="N" checked>
          <label for="notRecordYet" class="form-check-label">Not record yet</label>
        </div>
        <div class="form-check form-check-inline">
          <input type="radio" class="form-check-input" id="recorded" v-model="wish.isRecord" value="Y">
          <label for="recorded" class="form-check-label">Recorded</label>
        </div>
      </div>

      <div class="d-grid gap-2 d-md-block" v-if="editMode">
        <button type="submit" class="btn btn-primary">수정</button>
        <button type="button" class="btn btn-primary m-1" @click="deleteWish">삭제</button>
        <button type="button" class="btn btn-primary" @click="goList">취소</button>
      </div>
      <div class="d-grid gap-2 d-md-block" v-else>
        <button type="submit" class="btn btn-primary">등록</button>
        <button type="button" class="btn btn-primary m-1" @click="goList">취소</button>
      </div>
    </form>
  </div>
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
        alert('수정되었습니다.');
        await axios.put(`http://localhost:3000/wishlist/${route.params.id}`, data);
      } else {
        alert('등록되었습니다.');
        await axios.post('http://localhost:3000/wishlist', data);
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