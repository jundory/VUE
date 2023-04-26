<template>
  <br />
  <v-select
  class="selBox"
  v-model="select"
  :items="selectList"
  item-title="country"
  label="country"
  return-object
  :key="selectList"
  >
</v-select>
<v-btn @click="SearchWthr" class="searchBox">Search</v-btn>
<KakaoMap :CoordData="CoordData" :key="CoordData.latitude"/>

</template>
<script>
import countryObj from '@/assets/country'
import {mapActions} from 'pinia'
import {mapState} from 'pinia'
import {useUserStore} from '@/stores/user'

import KakaoMap from '@/components/KakaoMap.vue'

export default {
  computed:{
    ...mapState(useUserStore, ['getIdData', 'getRegionData', 'getLatitude', 'getSearchData'])
  },
  components:{
    KakaoMap,
  },
  created(){
    this.quarter()
  },
  data(){
    return{
      selectList: countryObj,

      CoordData: {
        latitude : '',
        longitude: '',
        regionName: '',
      },

      select : {
          nation: 'KR',
          country: '',
        },
    }
  },

  methods:{
    ...mapActions(useUserStore,['setCoordinate', 'setRegionData','setSearchData']),

    quarter(){
      if(!this.getIdData){
        alert('로그인이 필요합니다.')
        this.$router.push('/Login')
      }
      else this.SelBoxFilter()
    },

    SelBoxFilter(){
      this.getRegionData ? this.select.country = this.getRegionData : this.select.country = 'Seoul'
    },

    SearchWthr(){
      console.log('선택된 지역',this.select.country)
      if(!this.getSearchData.includes(this.select.country)){
      this.setSearchData(this.select.country)
    }
      this.ApiCoordinate(this.select.country);
    },

    async ApiCoordinate(param){
      // let {latitude, longitude, regionName} = '';

      const response = await this.axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${param}&count=1`)
      console.log("좌표api:::::::::",response)

      this.CoordData.latitude = response.data.results.map((i)=>i.latitude).join('')
      this.CoordData.longitude = response.data.results.map((i)=>i.longitude).join('')
      this.CoordData.regionName = response.data.results.map((i)=> i.name).join('')
      //store
      this.setCoordinate(this.CoordData.latitude, this.CoordData.longitude)
      this.setRegionData(this.CoordData.regionName)
    },
  }
}
</script>

<style scoped>
  .selBox{
    float: left;
    width: 40%;
    padding: 10px;
  }
  .searchBox{
    float: left;
    width: 7%;
    height: 54px;
    padding: 10px;
    top: 11px;
  }
</style>
