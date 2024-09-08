<script setup>
import { ref } from 'vue';

const isVisible = ref(true); 

const closeBanner = () => {
  if (isVisible.value) {
    isVisible.value = false; 
  } else {
    console.log("нет скидки");
  }
};
</script>

<template>
  <div v-if="isVisible" class="underheader">
    <span class="discount-text">Скидки на все -10%</span>
    <button class="close-button" @click="closeBanner">✖</button>
  </div>
</template>

<style scoped>
.underheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  margin-bottom: 30px;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #721c24;
}
</style>