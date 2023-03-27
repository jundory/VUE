<template>
  <!-- <Header/> -->
  <!-- <HelloWorld /> -->
  <Post/>
  <!-- <Ref ref="test"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Header from './components/Header.vue'
// import Ref from './components/Ref.vue'
import Post from './components/Post.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Header,
    // Ref,
    Post,
  },
  mounted() {
    // console.log("부모에서 ref로 접근",this.$refs.test.$refs.myRef) //mounted가 되어야 접근 가능.
  },
  data(){
    return{

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
