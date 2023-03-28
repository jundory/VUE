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
<style scoped>.calculator button {
  margin: 8px;
  padding: 0;
  border: 0;
  display: block;
  outline: none;
  border-radius: calc(var(--button-height) / 2);
  font-size: 24px;
  font-family: Helvetica;
  font-weight: normal;
  color: #999;
  background: linear-gradient(135deg, rgba(230, 230, 230, 1) 0%, rgba(246, 246, 246, 1) 100%);
  box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1), 4px 4px 10px -8px rgba(0, 0, 0, .3);
}

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