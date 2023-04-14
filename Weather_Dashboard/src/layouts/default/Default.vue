<template>
  <div>
  <v-app>
    <default-bar @openBar="drawer = !drawer"/>

    <default-view />
    <v-navigation-drawer
        v-model="drawer"
        location="left"
        permanent
      >
        <v-list density="compact">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            active-color="primary"
          >
            <!-- :disabled="!!!getIdData" -->
            <!-- <div v-if="!!getIdData"> -->
            <router-link :to="item.path" style="text-decoration: none; color:black">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>
            <!-- </div>
            <div v-else-if="item.title =='홈'">
            <router-link to="/" style="text-decoration: none; color:black">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>
            </div>
            <div v-else>
            <router-link to="/Login" style="text-decoration: none; color:black">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>
            </div> -->
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

          </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </v-app>
</div>
</template>

<script>
  import authMixin from '@/mixins/authMixin';
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'

  import {mapState} from 'pinia'
  import {useUserStore} from '@/stores/user'

  export default {
    components :{
      DefaultBar,
      DefaultView
    },
    mixins:[authMixin],

    computed:{
      ...mapState(useUserStore, ['getIdData', 'getRegionData'])
    },

    data () {
      return {
        drawer: true,
        group: null,
        items: [
          {
            title: '홈',
            icon: 'mdi-home-outline',
            path: '/'
          },
          {
            title: '검색',
            icon: 'mdi-cloud-search-outline',
            path: '/Search'
          },
          {
            title: '날씨',
            icon: 'mdi-weather-windy',
            path: '/Weather'
          },
        ],
      }
    },
  }


</script>
<style scoped>
  /* a:link,a:visited{
    text-decoration: none,

  } */
</style>
