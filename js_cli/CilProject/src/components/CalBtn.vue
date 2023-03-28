<template>
        <button @click="clickBtn(forItem)">{{forItem}}</button>
</template>
<script>
export default {
    name:'CalBtn',
    props:['forItem'],
    data(){
        return{
            storeNum:'',
            isOperator:'',
        }
    },
    methods:{
        clickBtn(param){
            this.$emit("numBtn", param)
        },

    }
}
</script>
<style scoped>
    .calculator button {
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
</style>
