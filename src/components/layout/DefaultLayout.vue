<template>
  <v-container fluid style="padding: 0">
    <v-app-bar
      elevation="5"
      color="green"
      dark
    >
      <v-app-bar-nav-icon @click="showMenu = !showMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>Анкетирование</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn color="green" @click="logout">
        Выйти
        <v-icon
          right
          dark
        >
          mdi-logout
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="showMenu"
      absolute
      left
      temporary
      color="green"
      dark
    >
      <v-list>
        <v-list-item class="px-2">
          <v-img
            alt="logo"
            src="http://anketaback.vfbsac.by/static/img/bsac_logo.svg"
            max-width="50"
            max-height="50"
          ></v-img>
          <p class="ml-5" style="padding: 0; margin: 0; font-size: 20px">Анкетирование</p>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item link @click="$router.push({path: '/dashboard'})">
          <v-list-item-icon>
            <v-icon>mdi-chart-box</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Главная</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({path: '/answer/list'})">
          <v-list-item-icon>
            <v-icon>mdi-message</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Ответы</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({path: '/form/list'})">
          <v-list-item-icon>
            <v-icon>mdi-clipboard-edit</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Формы</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({path: '/discipline/list'})">
          <v-list-item-icon>
            <v-icon>mdi-flask</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Дисциплины</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({path: '/department/list'})">
          <v-list-item-icon>
            <v-icon>mdi-flask</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Кафедры</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({path: '/speciality/list'})">
          <v-list-item-icon>
            <v-icon>mdi-cast-education</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Специальности</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({path: '/specialization/list'})">
          <v-list-item-icon>
            <v-icon>mdi-cast-education</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Специализации</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({path: '/user/list'})">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Пользователи</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({path: '/teacher/list'})">
          <v-list-item-icon>
            <v-icon>mdi-account-tie</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Преподаватели</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  name: 'DefaultLayout',

  data() {
    return {
      showMenu: false
    }
  },

  methods: {
    logout() {
      this.$store.dispatch('session/logout');
      this.$router.push('/auth');
    }
  }
}
</script>

<style scoped>

</style>
