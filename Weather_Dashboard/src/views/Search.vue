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
    ...mapState(useUserStore, ['getIdData', 'getRegionData'])
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
    ...mapActions(useUserStore,['coordinate']),

    quarter(){
      if(!this.getIdData){
        this.$router.push('/Login')
      }
      this.SelBoxFilter()
    },

    SelBoxFilter(){
      if(!this.getIdData){
        this.$router.push('/Login')
      }
      else if(this.getRegionData){
        this.select.country = this.getRegionData
      } else {
        this.select.country = 'Seoul'
      }
    },

    SearchWthr(){
      console.log('선택된 지역',this.select.country)
      this.getCoordinateData(this.select.country);
    },

    async getCoordinateData(param){
      // let {latitude, longitude, regionName} = '';

      const response = await this.axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${param}&count=1`)
      console.log("좌표api:::::::::",response)

      this.CoordData.latitude = response.data.results.map((i)=>i.latitude).join('')
      this.CoordData.longitude = response.data.results.map((i)=>i.longitude).join('')
      this.CoordData.regionName = response.data.results.map((i)=> i.name).join('')
      //store
      this.coordinate(this.CoordData.latitude, this.CoordData.longitude, this.CoordData.regionName)
      console.log(this.CoordData.latitude, this.CoordData.longitude, this.CoordData.regionName)

      // this.$router.push('/Weather')
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
