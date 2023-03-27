<template>
    {{isToggle}}
    <div>
        <button @click="nameBtn()">버튼</button>
        <div v-if="!!isToggle">
            <div v-for="item in testData" :key="item"> 
                {{ item.name }}
            </div>
        </div>
        <!-- v-show는 일단 dom에 렌더링이 됨 -->
        <!-- <div v-show="!!isToggle">
            <div v-for="item in testData" :key="item">
                {{ item.name }}
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    name : 'Header',
   data(){
    return {
        isToggle : false,
        testData : [
            {
            name : "Lee",
            age : 26,
            },
            {
            name : "Kim",
            age : 18,
            },
            {
            name : "Choi",
            age : 9,
            },
            {
            name : "Park",
            age : 41,
            },
            {
            name : "Son",
            age : 30,
            },
            {
            name : "Ahn",
            age : 50,
            }
        ]
    }
   },
   methods: {
    nameBtn(){
        this.isToggle = !this.isToggle;
        this.nameFilter(true)
    },
    nameFilter(init){
        if(init){
            this.testData = this.testData.filter(i=> i.age < 30)
            console.log(this.testData,"이름필터링")
        } else console.log("error!")
    }    
   }
}
</script>
<style scoped>

</style>