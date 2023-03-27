
<template>
  <Header class="header"></Header>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <router-view />
</template>
  <script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import Header from './components/Header.vue'
  </script>

<style scoped>

.header {
  position: sticky;
  top: 0px; /* 도달했을때 고정시킬 위치 */
  font-size: 1em;
  padding: 5px;
  background-color: rgb(255 255 255);
  border-bottom: 2px solid rgb(14, 9, 1);
  z-index: 10;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
