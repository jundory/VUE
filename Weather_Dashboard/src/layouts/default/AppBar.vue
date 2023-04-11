<template>
  <v-app-bar >
    <v-app-bar-nav-icon @click.stop="$emit('openBar')"></v-app-bar-nav-icon>
    <v-app-bar-title>
      <v-icon icon="mdi-weather-night-partly-cloudy"/>
      날씨
    </v-app-bar-title>
    <v-app-bar-title v-if="!!!getIdData">

      <v-btn
            min-width="100"
            target="_blank"
            variant="text"
            @click="logIn"
            style="left:777px"
          >
            <v-icon
              icon="mdi-login"
              size="large"
              start
            />
            Log in
          </v-btn>

    </v-app-bar-title>
    <v-app-bar-title v-else>

      <v-btn
            min-width="100"
            target="_blank"
            variant="text"
            @click="logOut"
            style="left:777px"
          >
            <v-icon
              icon="mdi-login"
              size="large"
              start
            />
            Log out
          </v-btn>

    {{ getIdData }}님 환영합니다.
    </v-app-bar-title>

  </v-app-bar>
</template>

<script>
import {mapState} from 'pinia'
import {mapActions} from 'pinia'
import {useUserStore} from '@/stores/user'
// import router from '@/router';

export default{
  computed:{
    ...mapState(useUserStore, ['getIdData']),
    getId:'getIdData',
  },
  mounted(){
    this.test()
  },
  data(){
    return{
    }
  },
  methods:{
    ...mapActions(useUserStore, ['setAccount']),
    logIn(){
      this.$router.push('/Login')
    },
    logOut(){
      this.setAccount('','')
      alert('로그아웃 되었습니다.')
      console.log(this.getIdData,"asdasd")
      this.$router.push('/Login')
    },
    test(){
      console.log('나오냐?',useUserStore.getIdData)
    }
  }
}

</script>
