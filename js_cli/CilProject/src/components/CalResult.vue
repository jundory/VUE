<template>
    <div>
      <input 
      class="result" 
      v-model="showResult"
      :disabled="true" 
      />
    </div>
</template>
<script>
export default {
    name:'CalResult',
    props:['showResult'],
    mounted(){
    },
    data(){
      return{
        showResult: this.showResult,
        inputData:'',
      }
    },
    methods:{
      test(){
        this.inputData = this.showResult
      }
    }
}
</script>
<style scoped>
.result {
  text-align: right;
  line-height: var(--button-height);
  font-size: 48px;
  font-family: Helvetica;
  padding: 0 20px;
  color: #666;
  width:250px; 
  display: block;
  margin-left: 40px;
}
</style>