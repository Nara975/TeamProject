<script setup>
import Tire from './Tire.vue';
import { useCounterStore } from '@/stores/counter'; // 옵션스토어 활용

const counterStore = useCounterStore() // 옵션스토어 활용
</script>

<template>
  <div class="rear-wheel">
    <span>REAR WHEEL</span>
    <Tire />
    <!-- 옵션스토어 활용 : 스토어 횟수(count) 상태 데이터 출력 -->
    <div>TIMES: {{ counterStore.count }}</div>
    <!-- 옵션스토어 활용 : 회전 버튼 클릭 시 스토어 increment 액션 호출 -->
    <button @click="counterStore.increment()">회전</button>
  </div>
</template>

<style scoped>
.rear-wheel {
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
}
</style>
