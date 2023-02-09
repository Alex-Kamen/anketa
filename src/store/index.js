import Vue from 'vue';
import Vuex from 'vuex';
import UserState from '@/store/modules/user';
import AlertState from '@/store/modules/alert';
import AnswerState from '@/store/modules/answer';
import DepartmentState from '@/store/modules/department';
import DisciplineState from '@/store/modules/discipline';
import FormState from '@/store/modules/form';
import SessionState from '@/store/modules/session';
import SpecialityState from '@/store/modules/speciality';
import SpecializationState from '@/store/modules/specialization';
import TeacherState from '@/store/modules/teacher';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: UserState,
    alert: AlertState,
    department: DepartmentState,
    discipline: DisciplineState,
    form: FormState,
    session: SessionState,
    speciality: SpecialityState,
    specialization: SpecializationState,
    teacher: TeacherState,
    answer: AnswerState,
  }
})
