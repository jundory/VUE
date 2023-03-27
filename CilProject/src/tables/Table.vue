<template>
        <div class="data_table">
        <table>
            <!-- th:표의 제목(table head) tr:가로줄(table row) td:셀(table data) -->
            <thead>
                <tr>
                    <th v-for="header in headers" :key="header">
                        {{ header.text }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item">
                    <td v-for="data in headValue">
                    {{ item[data] }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name : 'Table',
    props : { 
        headers : Array, 
        items : Array,
    },
    mounted(){
        this.headerFilter()
    },
    data(){
        return{
            headValue:'',
        }
    },
    methods : {
        headerFilter(){
           this.headValue = this.headers.map((i)=> i.value)
           console.log("filter headValue",this.headValue)
        } 
    }
}
</script>
<style scoped>
    table{
            width: 75%;
            text-align : left;
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