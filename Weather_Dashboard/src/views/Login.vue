<template>
  <div>
    <br />
    <!-- <div v-if="!!isLogin"> {{ getIdData }}님 환영합니다. </div> -->
  <v-text-field label="Id" v-model="getIdData"></v-text-field>
  <v-text-field label="Password" v-model="getPwdData"></v-text-field>
  <v-btn :disabled="getIdData == '' || getPwdData == ''" @click="login">로그인</v-btn>
  </div>
</template>

<script>
import {mapActions} from 'pinia'
import {useUserStore} from '@/stores/user'

export default {
  data(){
    return{
      getIdData:'',
      getPwdData:'',
      isLogin : false
    }
  },
  methods:{
    ...mapActions(useUserStore, ['setAccount']),
    login(){
      if(this.getIdData =='user' && this.getPwdData == '1234'){
      // this.isLogin = !this.isLogin
      this.setAccount(this.getIdData, this.getPwdData)
      alert("로그인 되었습니다.")
      this.$router.push('/')
      }
      else
      alert(`아이디 또는 비밀번호가 틀렸습니다. 다시 입력해주세요.`)
      this.getIdData = ''
      this.getPwdData = ''
    },
  }
}
</script>
