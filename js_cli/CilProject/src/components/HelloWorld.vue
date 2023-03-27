<template>
  <div>   <br />
    {{ mixinData }}  
    <h4>양방향 통신확인 : {{ modelTest }}</h4>
    <input 
    v-model="modelTest" 
    placeholder="입력해주세요." 
    />

    <div> 현재 msg는 {{ msg }} 에서 옴. </div>
    <br />
<!-- "" 안의 값이 부모 꺼임. 즉, @change="change"는 @change로 받을 이벤트를 change 함수에 넣어줄 통로 역할-->
    <Emit :count="count" @change="countChange" ref="test"/>
    <Emit/> 
  </div>

</template>

<script>
import Mixin from '@/mixin/Mixin.vue'
import Emit from '@/components/Emit.vue'

export default {
  mixins : [Mixin],     
  name: 'HelloWorld',

  components : {
    Emit
  },

  data(){
    return{
      modelTest : '',
      count : 0,
      msg : '컴포넌트', // 데이터 중복 시 해당 component 데이터가 적용
    }
  },
  methods:{
    countChange(value) {
      this.count = value;
    },
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
