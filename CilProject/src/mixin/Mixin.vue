<template>
</template>
<script>
export default {
    name : 'Mixin',
    mounted() {
        console.log("mixin 잘 호출됨")
    },
    data(){
        return{
            msg : '믹스인',
            mixinData : 'Hello'
        }
    },
    methods: {
        
    },
}
</script>