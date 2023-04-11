<template>
  <v-card
    class="mx-auto"
    max-width="600"
  >
  <!-- 타이틀 -->
    <v-card-item :title="this.weatherData.regionName">
      <template v-slot:subtitle>
        <v-icon
          icon="mdi-alert"
          size="18"
          color="error"
          class="me-1 pb-1"
        ></v-icon>

        <span>{{alertShowMsg}}</span>
      </template>
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>

        <!-- 온도 -->
        <v-col
          class="text-h1"
          cols="8"
        >
          {{this.showTodayTemp}}°C
        </v-col>

        <!-- 날씨 아이콘 -->
        <v-col cols="2" class="text-right">
          {{ showTodayState }}
          <v-icon
            :icon=showTodayIcon
            size="132"
          ></v-icon>
        </v-col>

      </v-row>
    </v-card-text>


    <div class="d-flex py-3">
      <v-list-item
        density="compact"
        prepend-icon="mdi-weather-windy"
      >
      <!-- 바람 세기 -->
        <v-list-item-subtitle>{{this.weatherData.windspeed}} km/h (풍속)</v-list-item-subtitle>
      </v-list-item>

      <v-list-item
        density="compact"
        prepend-icon="mdi-weather-pouring"
      >
        <v-list-item-subtitle>{{this.weatherData.precipitationMax[0]}}% (강수확률)</v-list-item-subtitle>
      </v-list-item>
    </div>
    <v-expand-transition>
      <div v-if="isToggle">
        <div class="py-2">
          {{ pickDays }}
          <!-- 슬라이더바 -->
          <v-slider
            v-model="pickDays"
            :max="6"
            :step="1"
            :ticks="sliderDays"
            class="mx-4"
            color="primary"
            density="compact"
            hide-details
            show-ticks="always"
            thumb-size="14"
          ></v-slider>
        </div>

        <!-- 리스트 -->
        <v-list class="bg-transparent">
          <v-list-item
            v-for="item in forecast"
            :key="item.day"
            :title="item.day"
            :append-icon="item.icon"
            :subtitle="item.temp"
          >
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn @click="isToggle = !isToggle">
        {{ !isToggle ? 'Full Report' : 'Hide Report' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import WeatherObj from '@/assets/common'

export default {
  props:['weatherData'],

  mounted(){
    setTimeout(()=>this.filterData(),1000)
  },

  data: () => ({
    isToggle : false,
    pickDays:'0',
    WeatherObj: WeatherObj,

    showTodayIcon : '',
    showTodayState : '',
    showTodayTemp :'',
    alertMsg :'',
    sliderDays: '',

  }),

  computed:{
    alertShowMsg(){
      if(this.weatherData?.precipitationSum[0] > 50){
        this.alertMsg = ' 폭우 주의 '
      }
      if(this.weatherData?.uvIndex[0] > 6){
        this.alertMsg = ' 자외선 지수 높음 '
      }
      if(this.weatherData?.temperatureMax[0] > 30){
        this.alertMsg = ' 폭염 주의 '
      }
      return this.alertMsg
    },
  },
  methods:{
    filterData(){
      let filterIcon;
      console.log("PropsData::::::::::",this.weatherData)
      filterIcon = this.WeatherObj.filter((i)=> i.code == this.weatherData.weathercode[0])

      this.showTodayIcon = filterIcon[0].icon
      this.showTodayState = filterIcon[0].state

      this.showTodayTemp = this.weatherData.temperature
      this.sliderDays = {...(this.weatherData.oneWeek).map((i)=> i.slice(5))}
    },

  },
}
</script>
<style scoped>

</style>
