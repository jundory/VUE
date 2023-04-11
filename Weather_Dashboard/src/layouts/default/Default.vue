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
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'

  export default {
    components :{
      DefaultBar,
      DefaultView
    },
    created(){

    },
    data () {
      return {
        drawer: true,
        group: null,
        items: [
          // {
          //   title: 'Login',
          //   icon: 'mdi-login',
          //   path: '/Login'
          // },
          {
            title: 'Home',
            icon: 'mdi-home-outline',
            path: '/'
          },
          {
            title: 'Search',
            icon: 'mdi-cloud-search-outline',
            path: '/Search'
          },
        ],
      }
    },
    methods:{
    }
  }


</script>
<style scoped>
  /* a:link,a:visited{
    text-decoration: none,

  } */
</style>
