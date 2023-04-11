<template>
  <br />
  <v-select
  v-model="select"
  :items="selectList"
  item-title="country"
  label="country"
  return-object
  :key="selectList"
  >
</v-select>

  <span><v-btn @click="SerachWthr">Search</v-btn> </span>

  <div v-if="!!test">
  <Weather :weatherData="weatherData" :key="weatherData.regionName"/>
</div>
</template>
<script>
import Weather from '@/components/Weather.vue'
import counterObj from '@/assets/country'

import {mapActions} from 'pinia'
import {useUserStore} from '@/stores/user'

export default {
  components:{
    Weather,
  },
  created(){

  },
  mounted(){
  },
  data(){
    return{
      coordinateApi : 'https://geocoding-api.open-meteo.com/v1/search?name=Seoul&count=1',
      test : false,
      selectList: counterObj,

      select : {
          nation: 'KR',
          country: 'Seoul',
        },

      //props
      coordinateData:{
        latitude:'',
        longitude:'',
      },

      weatherData :{
        regionName:'',  //지역이름
        windspeed:'', //풍속

        //daily
        weathercode:'', //날씨 코드
        temperatureMax:'', //최대 온도
        uvIndex:'', //자외선지수
        precipitationSum:'', //강수량 합계
        precipitationMax:'',  //강수량
        oneWeek:'', //날짜
        temperature:'', //온도
      },
    }
  },
  methods:{
    ...mapActions(useUserStore,['coordinate']),

    SerachWthr(){
      console.log('선택된 지역',this.select.country)
      this.getCoordinateData(this.select.country);
        this.test = true
    },

    async getCoordinateData(param){
      const response = await this.axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${param}&count=1`)
      console.log("좌표api:::::::::",response)
      // this.coordinateData.latitude = response.data.results.map((i)=>i.latitude).join('')
      // this.coordinateData.longitude = response.data.results.map((i)=>i.longitude).join('')
      this.coordinateData.latitude = response.data.results.map((i)=>i.latitude).join('')
      this.coordinateData.longitude = response.data.results.map((i)=>i.longitude).join('')
      this.weatherData.regionName = response.data.results.map((i)=> i.name).join('')

      this.coordinate(this.coordinateData.latitude, this.coordinateData.longitude)
      this.getWeatherData()
    },

    async getWeatherData(){
      const response = await this.axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${this.coordinateData.latitude}&longitude=${this.coordinateData.longitude}&daily=weathercode,temperature_2m_max,uv_index_max,precipitation_sum,precipitation_probability_max&current_weather=true&timezone=Asia%2FTokyo`)
        console.log("날씨api::::::::::",response)
        this.weatherData.windspeed = response.data.current_weather.windspeed
        // this.weatherData.weathercode = response.data.current_weather.weathercode

        this.weatherData.temperature = response.data.current_weather.temperature
        this.weatherData.weathercode = response.data.daily.weathercode
        this.weatherData.precipitationMax = response.data.daily.precipitation_probability_max
        this.weatherData.precipitationSum = response.data.daily.precipitation_sum
        this.weatherData.uvIndex = response.data.daily.uv_index_max
        this.weatherData.temperatureMax = response.data.daily.temperature_2m_max
        this.weatherData.oneWeek = response.data.daily.time
    },
  },
}
</script>
<style scoped>

</style>
