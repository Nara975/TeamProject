import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 셋업 스토어
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

// 옵션 스토어
export const useCounterStore = defineStore('counter', { // 스토어 정의
  state: () => ({ // 상태 정의 : 스토어에서 사용할 데이터 정의(반응형 상태)
    count: 0
  }),
  actions: { // 액션 정의 : 상태 데이터 값을 변경하는 메서드 정의
    increment() {
      this.count++
    },
  },
  getters: { // 게터 정의 : 상태 데이터 가공해서 조회하는 메서드 정의 (computed와 유사)
    doubleCount: (state) => state.count * 2,
  }
})

// 셋업 스토어 vs 옵션 스토어
// 셋업 스토어 : 유연하고 다양한 기능 활용
// 옵션 스토어 : 옵션에 따라 나눠져 있고 직관적
