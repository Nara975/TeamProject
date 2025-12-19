<script setup>
// const message = "There" // 텍스트일 경우
// const message = { name: "Kim", age: 20 } // 객체일 경우 : 이 경우 Json.stringify()를 호출하여 JSON으로 변환
// const page = "history"
// let loading = true
// const parent = "fruits"
// const child = "item"

// const fruits = "apple avocado"
// const fruitArr = ["banana", "blueberry"]

// const visible = {fruit: true}
// const hidden = {fruit: false}

// 스타일 반영
// const rect = "background:red; width:200px; height:100px"

// const rect = {
//   background: "red",
//   width: "200px",
//   height: "100px"
// }
// let loading = false


// 4.3.6) 반복 디렉티크
// const fruits = ["apple", "banana", "pear"]

// const members = [
//   {id: 1, name: "김위키"},
//   {id: 2, name: "이북스"},
// ]

// 4.3.7) 이벤트 디렉티크
// const pop = (message) => {
//   window.alert(message)
// }

// const run = () => {
//   window.alert("Run")
// }

// 4.4) 반응형 상태
// 이 경우 컴포넌트에 사용된 데이터가 아직 반응형 상태가 아니기 때문 ref 메서드 활용하여 반응형으로 만들어야 함
// 팔굽혀 펴기 개수
// let pushUp = 0

// 윗몸 일으키기 개수
// let sitUp = 0

// 팔굽혀펴기 개수 증가
// const increasePushUp = () => {
//   pushUp++;
//   console.log(`pushUp: ${pushUp}`);
// }

// 윗몸 일으키기 개수 증가
// const increaseSitUp = () => {
//   sitUp++;
//   console.log(`sitUp: ${sitUp}`);
// }

// ref 메서드 사용
// ref 메서드 사용 시 스크립트 블록에서는 .value 사용, 템플릿 블록에서는 사용하지 않아도 됨
// import {ref} from "vue"

// const pushUp = ref(0)
// const sitUp = ref(0)

// const increasePushUp = () => {
//   pushUp.value++;
//   console.log(`pushUp: ${pushUp.value}`);
// }

// const increaseSitUp = () => {
//   sitUp.value++;
//   console.log(`sitUp: ${sitUp.value}`);
// }

// reactive 사용
// ref와 달리 .value 사용하지 않아도 됨
// import { reactive } from 'vue';

// const state = reactive ({
//   pushUp : 0,
//   sitUp : 0
// })

// const increasePushUp = () => {
//   state.pushUp++
//   console.log(`pushUp: ${state.pushUp}`);
// }
// const increaseSitUp = () => {
//   state.sitUp++
//   console.log(`sitUp: ${state.sitUp}`);
// }


// ref 메서드 : 문자열, 숫자, 불리언 같은 원시형 데이터를 반응형으로 만들 때 사용(배열, 객체 데이터 포함)
// reactive 메서드 : 객체를 반응형으로 만들 때

// import { nextTick, reactive } from 'vue';

// const state = reactive ({
//   pushUp : 0,
//   sitUp : 0
// })

// const increasePushUp = () => {
//   state.pushUp++
//   console.log(document.getElementById("pushUp").innerText); // 반응형 상태가 UI에 반영되기 전에 실행됨 nextTick 메서드로 해결
// }

// const increasePushUp = () => {
//   state.pushUp++

//   nextTick(() => {
//     console.log(document.getElementById("pushUp").innerText); // 반응형 상태가 UI에 반영되기 전에 실행됨 nextTick 메서드로 해결
//   })
// }

// const increaseSitUp = () => {
//   state.sitUp++
//   console.log(`sitUp: ${state.sitUp}`);
// }

// 4.5) 컴퓨티드
// import { computed, reactive } from 'vue';

// // 반응형 상태
// const state = reactive ({
//   mvpId: 9,
//   players:[
//     {id:7, name: "John Doe"},
//     {id:9, name: "Jane Lee"},
//     {id:12, name: "James Park"},
//   ]
// })

// // 코드가 너무 길어서 줄이기 - 메서드 선언
// const getMvpName = () => {
//   if(state.mvpId) {
//     const player = state.players.find(p => p.id === state.mvpId)

//     if(player) {
//       return player.name
//     }
//   }
//   return "없음"
// }

// // 더 직관적으로 표현하기 -> computed
// const computedMvpName = computed(() => {
//   if(state.mvpId) {
//     const player = state.players.find(p => p.id === state.mvpId)

//     if(player) {
//       return player.name
//     }
//   }
//   return "없음"
// })

// console.log(computedMvpName); // 객체 형태로 출력
// // 컴퓨티드 사용 시 .value를 사용해야 값이 출력됨
// console.log(computedMvpName.value);

// 4.6 데이터 바인딩
// 단방향 예시 input 값을 변경해도 값이 변하지 않음 => 양방향 사용시 v-model 사용
// import { reactive } from 'vue';

// // 반응형 상태
// const state = reactive({
//   player : "Kim"
// })


// 양방향은 로그인 시 유용하게 사용
// const state = reactive({
//   form: {
//     id: "",
//     pw: ""
//   }
// })

// // 로그인 메서드
// const login = () => {
//   window.alert(state.form.id + "님 환영합니다!")
// }


// 4.7) 라이프사이클 훅
// 4.7.1) 생성 훅
// const hook = "onCreated"
// console.log(hook);

// 가독성을 위해 변경 1. onCreated 함수 선언 2. 괄호를 붙여 즉시 호출 3.비동기 작업 고려해 function 앞에 async 키워드 붙임
// (async function onCreated() {
//   const hook = "onCreated"
//   console.log(hook);
// })();

// 아이디로 특정 요소 찾기 ->  but 생성훅에서는 이 요소에 접근 X -> null 값 출력됨 (아직 컴포넌트가 마운트 되지 않았기 때문)
// (async function onCreated() {
//   console.log(document.getElementById("message"));
// })();

// 4.7.2) 마운트 훅
// import { onMounted } from 'vue';

// HTML 요소가 출력됨
// onMounted(() => {
//   console.log(document.getElementById("message"));
// })

// 4.7.3) 업데이트 훅
// import { onUpdated, reactive } from 'vue';

// //반응형 상태
// const state = reactive({
//   message: "Hello!?"
// })

// onUpdated(() => { // 버튼 id로 불러온 메세지로 변경할 예정
//   console.log(document.getElementById('btn').innerText);
// })

// 4.7.4) 마운트 해제 훅
// import { reactive } from 'vue';
// import Greeting from './components/Greeting.vue';

// const state = reactive({
//   visible: true
// })

// 4.9.1) 상태 관리 라이브러라 Pinia
import FrontWheel from './components/FrontWheel.vue';
import RearWheel from './components/RearWheel.vue';
</script>

<template>
  <!-- <div>Hello {{ message }}</div> -->

  <!-- <div>
    <span>Hello </span>
    <span v-text="JSON.stringify(message)"></span>
  </div> -->

  <!-- <div :id="page">HISTORY PAGE</div> -->
  <!-- <input type="text" placeholder="아이디" :readonly="loading" />
  <input type="password" placeholder="패스워드" :readonly="loading" />
  <button :disabled="loading">로그인</button> -->

  <!-- <ul :class="parent">
    <li :class="child">사과</li>
    <li :class="child">바나나</li>
    <li :class="child">딸기</li>
    <li :class="child">배</li>
  </ul> -->

  <!-- <div :class="fruits">사과 / 아보카도</div>
  <div :class="fruitArr">바나나 / 블루베리</div>
  <div :title="fruitArr">바나나 / 블루베리</div> -->

  <!-- <div :class="visible">사과</div>
  <div :class="hidden">오이</div>
  <div :class="{fruit: true}">배</div> -->

  <!-- <div :style="rect"></div> -->

  <!-- 여기는 <div>로딩 중</div>으로 출력 -->
  <!-- <div v-if="loading">로딩 중</div> 
  <div v-else>로딩 완료</div> -->

  <!-- 여기는 "로딩 중"으로 출력 -->
  <!-- <template v-if="loading">로딩 중</template> 
  <template v-else>로딩 완료</template> -->

  <!-- <div v-show="loading">로딩 중</div>
  <div v-show="!loading">로딩 완료</div> -->
  <!-- template v-show는 출력되지 않음 -->
  <!-- <template v-show="true">로딩 중</template> -->

  <!-- 4.3.6) 반복 디렉티크 -->
  <!-- <div v-for="(f, idx) in fruits">{{ idx }} {{ f }}</div> -->
  <!-- <template v-for="f in fruits">{{ f }}</template> -->

  <!-- <ul>
    <li v-for="m in members" :key="m.id">{{ m.name }}</li>
  </ul> -->

  <!-- 4.3.7) 이벤트 디렉티크 v-on: 은 @로 대체 가능 -->
  <!-- <button v-on:click="pop('Hello11')"> -->
  <!-- <button @click="pop('Hello11')">
    Hello
  </button>
  <button @click="run">
    Run
  </button> -->

  <!-- 4.4) 반응형 상태 -->
  <!-- <div>
    <h1>체력 검사</h1>
    <br />
    <hr />
    <ul>
      <li id="pushUp">팔 굽혀 펴기 : {{ pushUp }}</li>
      <li id="sitUp">윗몸 일으키기 : {{ sitUp }}</li>
    </ul>
    <hr />
    <br />
    <button @click="increasePushUp()">팔 굽혀 펴기 증가</button>
    <button @click="increaseSitUp()">윗몸 일으키기 증가</button>
  </div> -->

  <!-- reactive 사용 -->
  <!-- <div>
    <h1>체력 검사</h1>
    <br />
    <hr />
    <ul>
      <li id="pushUp">팔 굽혀 펴기 : {{ state.pushUp }}</li>
      <li id="sitUp">윗몸 일으키기 : {{ state.sitUp }}</li>
    </ul>
    <hr />
    <br />
    <button @click="increasePushUp()">팔 굽혀 펴기 증가</button>
    <button @click="increaseSitUp()">윗몸 일으키기 증가</button>
  </div> -->


  <!-- 4.5) 컴퓨티드 -->
  <!-- <div>
    <h1>오늘의 MVP</h1>
    <div>
      <template v-if="state.mvpId">
        {{ state.players.find(m => m.id === state.mvpId)?.name || '없음' }}
      </template>
      <template v-else>없음</template>
    </div>
  </div> -->
  <!-- 길어서 메서드 선언으로 리팩토링 -->
  <!-- <div>
    <h1>오늘의 MVP</h1>
    <div>
      {{ getMvpName() }}
      // 이 부분 computed 사용
      {{ computedMvpName }}
    </div>
  </div> -->

  <!-- 4.6 데이터 바인딩 -->
  <!-- 단방향 예시 -->
  <!-- 양방향 사용시 v-model 사용 -->
  <!-- <div>
    <h1>{{ state.player }}</h1>
    <input type="text" :value="state.player" />
    <input type="text" v-model="state.player" />
  </div> -->

  <!-- 제출 시 login 메서드 호출 (새로고침을 막기 위한 prevent) -->
  <!-- <form @submit.prevent="login">
    // v-model을 활용한 양방향 데이터 바인딩
    <input type="text" v-model="state.form.id" placeholder="아이디" />
    <input type="password" v-model="state.form.pw" placeholder="패스워드" />

    // 제출용 버튼
    <button type="submit">로그인</button>
  </form> -->

  <!-- 4.7) 라이프사이클 훅
  4.7.1) 생성 훅 , 4.7.2) 마운트 훅 -->
  <!-- <div id="message">Aloha!</div> -->

  <!-- 4.7.3) 없데이트 훅 -->
  <!-- <button id="btn" @click="state.message='Aloha!!'">{{ state.message }}</button> -->


  <!-- 4.7.4) 마운트 해제 훅 -->
  <!-- <Greeting v-if="state.visible"/>
  <button @click="state.visible = false">hide</button> -->
  
  <!-- 4.8) 라우터 -->
  <!-- <router-view></router-view> -->

  <!-- 4.9.1) 상태 관리 라이브러라 Pinia -->
  <FrontWheel />
  <RearWheel />
</template>
