import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue';
import SignUpPage from '@/views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: '',
    component: LoginPage
  },
  {
    path: '/SignupPage',
    name: 'SignUp',
    component:  SignUpPage
  },
  {
    path: '/DoctorReg',
    name: 'Doctor',
    component: () => import(/* webpackChunkName: "doctor" */ '../views/DoctorReg.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
