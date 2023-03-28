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
            // else this.$emit("numBtn", param)
        },
        // numBtn(num){
        //     if(this.showResult == ''){
        //         this.showResult = num;
        //     }
        //     else if(this.showResult == '+' || this.showDasta =='-' ||this.showResult =='x' ||this.showResult =='÷'){
        //         this.showResult = '';
        //         this.showResult = (this.showResult + '' + num)*1
        //     }
        //     else this.showResult = (this.showResult + '' + num)*1
        //     console.log(this.showResult)
        // },
        // operator(p){
        //     this.storeNum = this.showResult
        //     this.showResult = p
        //     this.isOperator = p
        //     return this.showResult
        // },
    }
}
</script>
<style>

</style>