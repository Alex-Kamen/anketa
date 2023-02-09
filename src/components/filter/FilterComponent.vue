<template>
  <v-menu
    :close-on-content-click="false"
    offset-y
    nudge-bottom="20"
    transition="slide-y-transition"
    z-index="9999"
    v-if="$route.name !== 'organisation'"
  >
    <template v-slot:activator="{ on }">
      <v-btn text icon v-on="on">
        <v-icon color="green">mdi-filter</v-icon>
      </v-btn>
    </template>
    <div class="mf-container">
      <v-card width="400px">
        <v-card-text>
          <FilterAutocomplete
            label="Формы"
            :items="formList"
            v-model="filter.form"
          ></FilterAutocomplete>

          <FilterAutocomplete
            label="Логины"
            :items="userList"
            v-model="filter.login"
          ></FilterAutocomplete>

          <FilterAutocomplete
            label="Преподаватели"
            :items="teacherList"
            v-model="filter.teacher"
          ></FilterAutocomplete>

          <FilterAutocomplete
            label="Кафедра"
            :items="departmentList"
            v-model="filter.department"
          ></FilterAutocomplete>

          <FilterAutocomplete
            label="Специальность"
            :items="specialityList"
            v-model="filter.speciality"
          ></FilterAutocomplete>

          <FilterAutocomplete
            label="Специализация"
            :items="specializationList"
            v-model="filter.specialization"
          ></FilterAutocomplete>

          <InputComponent
            label="Другое"
            v-model="filter.searchText"
          ></InputComponent>
        </v-card-text>
        <v-card-actions>
          <v-btn color="green" class="actions-btn" elevation="0" dark @click="send()">Применить</v-btn>
          <v-spacer></v-spacer>
          <v-btn text class="actions-btn" color="green">Сбросить</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-menu>
</template>

<script>
import FilterAutocomplete from '@/components/input/FilterAutocomplete'
import InputComponent from '@/components/input/InputComponent'
import { Filter } from '@/models/Filter'

export default {
  name: 'FilterComponent',
  components: { InputComponent, FilterAutocomplete },

  data() {
    return {
      filter: new Filter()
    }
  },

  computed: {
    formList() {
      return this.$store.getters['form/formOptionList']
    },

    userList() {
      return this.$store.getters['user/userOptionList']
    },

    departmentList() {
      return this.$store.getters['department/departmentOptionList']
    },

    disciplineList() {
      return this.$store.getters['discipline/disciplineOptionList']
    },

    specialityList() {
      return this.$store.getters['speciality/specialityOptionList']
    },

    specializationList() {
      return this.$store.getters['specialization/specializationOptionList']
    },

    teacherList() {
      return this.$store.getters['teacher/teacherOptionList']
    }
  },

  methods: {
    send() {
      const path = this.$router.currentRoute.path.includes('answer') ? "/answer/list" : 'dashboard';
      const action = this.$router.currentRoute.path.includes('answer') ? "answer/list" : 'answer/data'
      this.$router.push({path: `${path}?${this.filter.toRequest()}`});
      this.$store.dispatch(action, this.filter.toRequest());
      this.filter = new Filter();
    }
  },

  mounted () {
    this.$store.dispatch('form/formList');
    this.$store.dispatch('user/userList');
    this.$store.dispatch('department/departmentList');
    this.$store.dispatch('discipline/disciplineList');
    this.$store.dispatch('specialization/specializationList');
    this.$store.dispatch('speciality/specialityList');
    this.$store.dispatch('teacher/teacherList')
  }
}
</script>

<style scoped>

</style>
