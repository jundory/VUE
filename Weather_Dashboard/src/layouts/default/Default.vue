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

            <router-link :to="item.path" style="text-decoration: none; color:black">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>

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

  export default {
    components :{
      DefaultBar,
      DefaultView
    },
    mixins:[authMixin],

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
          {
            title: '검색이력',
            icon: 'mdi-text-search',
            path: '/SearchHistory'
          },
        ],
      }
    },
  }


</script>
<style scoped>

</style>
