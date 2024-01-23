<template>

    <NuxtPage/>

</template>

<script setup lang="ts">
import { useMySchool } from './core/store/teach';

onMounted(() => {
  const store = useMySchool();
  store.loadFromStorage();
  console.log('This is my app.vue page ', store.school);
})
</script>

<style scoped>

</style>