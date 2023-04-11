import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      IdData:'',
      PwdData:'',
      latitude:'',
      longitude:'',
    }
  },
  getters: {
    getIdData(state){
      return state.IdData
    },
    getPwdData(state){
      return state.PwdData
    },
  },
  actions: {
    setAccount(id, pwd) {
      this.IdData = id
      this.PwdData = pwd
    },
    coordinate(lat, long){
      this.latitude = lat
      this.longitude = long
    }
  },
})
