<script setup>
// 마운트 해제 훅 : 컴포넌트 소멸 후 실행
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  console.log("onMounted", document.getElementById("greeting"));
})

onUnmounted(() => {
  console.log("onUnmounted", document.getElementById("greeting"));
})
</script>

<template>
  <div id="greeting">Aloha!</div>
</template>