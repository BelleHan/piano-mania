<template>
  <div>Wish Create</div>
  <form @submit="createWish">
    <label>음악가</label>
    <input type="text" v-model="wish.musician" /><br />
    <label>곡명</label>
    <input type="text" v-model="wish.music" /><br />
    <label>장르</label>
    <input type="text" v-model="wish.genre" /><br />
    <label>완주목표기간</label>
    <input type="text" v-model="wish.dueDate" /><br />
    <label>녹음여부</label>
    <input type="text" v-model="wish.isRecord" /><br />
    <button type="submit">등록</button>
  </form>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
  setup() {
    const wish = ref({
      musician: '',
      music: '',
      genre: '',
      dueDate: '',
      isRecord: ''
    })

    const createWish = async () => {
      let res
      const data = {
        musician: wish.value.musician,
        music: wish.value.music,
        genre: wish.value.genre,
        dueDate: wish.value.dueDate,
        isRecord: wish.value.isRecord
      }

      res = await axios.post('http://localhost:3000/wishlist', data)
    }

    return {
      wish,
      createWish
    }
  }
}
</script>

<style lang="scss" scoped></style>