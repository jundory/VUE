<template>
    <div class="data_table">
    <table>
        <thead>
            <tr>
                <th v-for="thead in headData">
                    {{ thead }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="rowItem in postData">
                <td v-for="colData in headData">
                    {{ rowItem[colData] }}
                </td> 
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
import axios from 'axios'
export default {
    mounted(){
        this.getPostData()
    },
    data(){
        return{
            postData:'',
            headData:'',
        }
    },
    methods:{
        async getPostData(){
            await axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response)=> this.postData = response.data)
            .catch((error)=> console.log("error!"))
            console.log(this.postData,"확인용")
            this.postHeadData()
        },
        postHeadData(){
            this.headData = {...Object.keys(this.postData[0])}
            console.log('헤드 데이터 필터링',this.headData)
        }
    }
}
</script>
<style scoped>

table{
    width: 75%;
    text-align : left;
    width: 90%;
    margin: 50px;
    }
    table th{
        padding : 12px;
        border-bottom: 2px solid  darkgray;
    }
    table td{
        padding : 12px;
    }
    table tr:nth-of-type(even){
        background-color: rgba(0,0,255,0.1);
    }
</style>