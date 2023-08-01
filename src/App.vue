<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style>
h4 {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 50px;
}
</style>
