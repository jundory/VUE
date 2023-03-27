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
        //     if(this.showData == ''){
        //         this.showData = num;
        //     }
        //     else if(this.showData == '+' || this.showDasta =='-' ||this.showData =='x' ||this.showData =='÷'){
        //         this.showData = '';
        //         this.showData = (this.showData + '' + num)*1
        //     }
        //     else this.showData = (this.showData + '' + num)*1
        //     console.log(this.showData)
        // },
        // operator(p){
        //     this.storeNum = this.showData
        //     this.showData = p
        //     this.isOperator = p
        //     return this.showData
        // },
    }
}
</script>
<style>

</style>