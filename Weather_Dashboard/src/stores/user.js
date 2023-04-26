import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      IdData:'',
      PwdData:'',
      latitude:'',
      longitude:'',
      RegionName:'',
      SearchData:[],
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
      return state.RegionName
    },
    getSearchData(state){
      return state.SearchData
    }
  },
  actions: {
    setAccount(id, pwd) {
      this.IdData = id
      this.PwdData = pwd
    },
    setCoordinate(lat, long){
      this.latitude = lat
      this.longitude = long
    },
    setRegionData(region){
      this.RegionName = region
    },
    setSearchData(region){
      this.SearchData.push(region)
    }
  },
})
