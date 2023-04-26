<template>
  <div>SearchList</div>
  {{ getSearchData }}
    <!-- <v-list lines="one">
        <v-list-item
          v-for="item in items"
          :key="item"
          :title="item"
        ></v-list-item>
    </v-list> -->
</template>
<script>
import { mapState } from 'pinia';
import { useUserStore } from '@/stores/user';
export default {
  computed:{
    ...mapState(useUserStore, ['getIdData', 'getSearchData'])
  },
  created(){
    this.quarter()
  },
  data(){
    return{
      HistoryList: {
        key:'',
        title:'',
      },
    }
  },
  methods:{
    quarter(){
      if(!this.getIdData){
        alert('로그인이 필요합니다.')
        this.$router.push('/Login')
      } else if(!this.getSearchData[0]){
        alert('검색된 지역이 없습니다.')
        this.$router.push('/Search')
      }
    },
    showItem(){
      // this.items.push(this.getSearchData)
      // this.HistoryList.title = {...this.items}
      console.log('items입니다', this.items)
    }
  }
}
</script>
