<template>
  <v-container>
    <v-card
      elevation="5"
      max-width="500"
      style="margin: 0 auto 50px auto; width: 100%;"
    >
      <v-card-title class="white--text mt-8" style="background: green">
        <div style="margin: 10px 0 30px 0; display: flex">
          <v-img
            alt="logo"
            src="http://anketaback.vfbsac.by/static/img/bsac_logo.svg"
            max-width="75"
            max-height="75"
          ></v-img>
          <p class="ml-5" style="margin-bottom: 0; font-size: 25px; padding-top: 15px">Анкетирование</p>
        </div>
      </v-card-title>
      <v-card-text>
        <AuthForm/>
      </v-card-text>
    </v-card>
  </v-container>

</template>

<script>
import AuthForm from '@/components/form/AuthForm'
export default {
  name: 'AuthPage',
  components: { AuthForm },
}
</script>

<style>
</style>
