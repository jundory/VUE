<template>
  <div>
    <br />
    <!-- <div v-if="!!isLogin"> {{ inputIdData }}님 환영합니다. </div> -->
  <v-text-field label="Id" v-model="inputIdData"></v-text-field>
  <v-text-field label="Password" v-model="inputPwdData"></v-text-field>
  <v-btn :disabled="inputIdData == '' || inputPwdData == ''" @click="login">로그인</v-btn>
  </div>
</template>

<script>
import {mapActions} from 'pinia'
import {useUserStore} from '@/stores/user'

export default {
  data(){
    return{
      inputIdData:'',
      inputPwdData:'',
      isLogin : false
    }
  },
  methods:{
    ...mapActions(useUserStore, ['setAccount']),
    login(){
      if(this.inputIdData =='user' && this.inputPwdData == '1234'){
      // this.isLogin = !this.isLogin
      this.setAccount(this.inputIdData, this.inputPwdData)
      alert("로그인 되었습니다.")
      this.$router.push('/')
      }
      else
      alert(`아이디 또는 비밀번호가 틀렸습니다. 다시 입력해주세요.`)
      this.inputIdData = ''
      this.inputPwdData = ''
    },
  }
}
</script>
