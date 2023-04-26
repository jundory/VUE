<template>
  <div v-if="getRegionData">
  <Weather :weatherData="weatherData" :key="weatherData.regionName"/>
</div>
</template>
<script>
import Weather from '@/components/Weather.vue'
import {mapState} from 'pinia'
import {useUserStore} from '@/stores/user'

export default {
  components:{
    Weather,
  },

  computed:{
      ...mapState(useUserStore, ['getLatitude', 'getLongitude', 'getRegionData', 'getIdData'])
  },

  mounted(){
    setTimeout(()=>this.quarter(),1000)
  },

  data(){
    return{
      weatherData :{
        regionName: '',  //지역이름
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
    quarter(){
      if(!this.getIdData){
        alert('로그인이 필요합니다.')
        this.$router.push('/Login')
      }
      else if(!this.getRegionData){
        alert('먼저 지역을 검색해주세요.')
        this.$router.push('/Search')
      } else {
        this.getWeatherData(this.getLatitude, this.getLongitude)
      }
    },

    async getWeatherData(lat, long){
      this.weatherData.regionName = this.getRegionData

      const response = await this.axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode,temperature_2m_max,uv_index_max,precipitation_sum,precipitation_probability_max&current_weather=true&timezone=Asia%2FTokyo`)
        console.log("날씨api::::::::::",response)
        this.weatherData.windspeed = response.data.current_weather.windspeed

        this.weatherData.temperature = response.data.current_weather.temperature
        this.weatherData.weathercode = response.data.daily.weathercode
        this.weatherData.precipitationMax = response.data.daily.precipitation_probability_max
        this.weatherData.precipitationSum = response.data.daily.precipitation_sum
        this.weatherData.uvIndex = response.data.daily.uv_index_max
        this.weatherData.temperatureMax = response.data.daily.temperature_2m_max
        this.weatherData.oneWeek = response.data.daily.time
    },
  }
}
</script>
