import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import ProjectDetail from '../views/ProjectDetail.vue';
import CV from '../views/VirtualCV/CV.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/projects/:slug',
    component: ProjectDetail,
    name: 'Project',
    props: true
  },
  {
    path: '/cv',
    component: CV,
    name: 'CV'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
