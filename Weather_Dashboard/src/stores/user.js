import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      IdData:'',
      PwdData:'',
      latitude:'',
      longitude:'',
      regionName:'',
    }
  },
  getters: {
    getIdData(state){
      return state.IdData
    },
    getPwdData(state){
      return state.PwdData
    },
    getLatitude(state){
      return state.latitude
    },
    getLongitude(state){
      return state.longitude
    },
    getRegionData(state){
      return state.regionName
    }
  },
  actions: {
    setAccount(id, pwd) {
      this.IdData = id
      this.PwdData = pwd
    },
    coordinate(lat, long){
      this.latitude = lat
      this.longitude = long
    },
    setRegion(i){
      this.regionName = i
    }
  },
})
