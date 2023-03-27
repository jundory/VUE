<template>
    <div>
    {{ count }}
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>
<script>
export default {
    name : 'Emit',
    props : ["count"],
    mounted() {
        this.test()
    },
    data(){
        return{
        }
    },
    methods:{
        increment() {
            // this.count +1 을 "change"라는 구멍에 넣어서 던짐.
        this.$emit("change", this.count + 1);
        },
        decrement() {
        this.$emit("change", this.count - 1);
        },
        test(){
            console.log(this.count)
        }
    }
}
</script>