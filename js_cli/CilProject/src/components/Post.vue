<template>
    <!-- <Table 
    :headers="headers" 
    :items="items"
    /> -->
    <todosTable />
</template>
<script>
// import Table from '@/tables/Table'
import todosTable from '@/tables/todosTable'

export default {
    name : 'Post',
    components : {
        // Table,
        todosTable,
    },
    computed: {

  },
    data(){
        return{
            headers : [
                {
                    text: 'Name',
                    value: 'name'
                },
                {
                    text: 'Version',
                    value: 'version'
                },
                {
                    text: 'Launch Date',
                    value: 'launch'
                }
            ],
            items : [
                {
                    name: 'React',
                    version: '18.2.0',
                    launch: '2013-05-29'
                },
                {
                    name: 'Vue',
                    version: '3.2.45',
                    launch: '2014-02'
                },
                {
                    name: 'jQuery',
                    version: '3.3',
                    disabled: true,
                    launch: '2006-08-26'
                },
                {
                    name: 'Svelte',
                    version: '3.53.1',
                    launch: '2016-11-26'
                }
            ],
        }
    }
}
</script>