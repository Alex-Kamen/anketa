import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '@/components/layout/DefaultLayout'
import lscache from 'lscache'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard',
      component: DefaultLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/pages/DashboardPage')
        },
        {
          path: '/answer/list',
          name: 'List of answers',
          component: () => import('@/pages/AnswerList')
        },
        {
          path: '/discipline/list',
          name: 'List of disciplines',
          component: () => import('@/pages/DisciplineList')
        },
        {
          path: '/form/edit',
          name: 'Edit form',
          component: () => import('@/pages/FormEdit')
        },
        {
          path: '/form/list',
          name: 'List of form',
          component: () => import('@/pages/FormList')
        },
        {
          path: '/form/:id',
          name: 'form',
          component: () => import('@/pages/FormPage')
        },
        {
          path: '/speciality/list',
          name: 'List of speciality',
          component: () => import('@/pages/SpecialityList')
        },
        {
          path: '/specialization/list',
          name: 'List of specialization',
          component: () => import('@/pages/SpecializationList')
        },
        {
          path: '/department/list',
          name: 'List of department',
          component: () => import('@/pages/DepartmentList')
        },
        {
          path: '/teacher/list',
          name: 'List of teacher',
          component: () => import('@/pages/TeacherList')
        },
        {
          path: '/user/list',
          name: 'List of user',
          component: () => import('@/pages/UserList')
        }
      ]
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('@/pages/AuthPage')
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (from.name !== 'Auth' && to.name !== 'Auth' && !lscache.get('session')) {
    next({ name: 'Auth' });
  } else {
    next();
  }
})

export default router
