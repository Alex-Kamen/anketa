<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
          icon
        >
          <v-icon>mdi-account-multiple-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Добавить пользователя</span>
        </v-card-title>
        <v-card-text>
          <UserForm ref="form"></UserForm>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Закрыть
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="addUser"
          >
            Добавить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import UserForm from '@/components/form/UserForm'
export default {
  name: 'AddUserModal',
  components: { UserForm },

  data() {
    return {
      dialog: false
    }
  },

  methods: {
    addUser() {
      if (this.$refs.form.invalid()) return;

      this.$store.dispatch('user/addUser', this.$refs.form.user);
      this.dialog = false;
    }
  }
}
</script>

<style scoped>

</style>
