import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StudentLogin from '@/components/StudentLogin'
import About from '@/components/About'
import AboutCollege from '@/components/AboutCollege'
import Question from '@/components/Question'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/studentlogin',
      name: 'StudentLogin',
      component: StudentLogin
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/aboutcollege',
      name: 'AboutCollege',
      component: AboutCollege
    },
    {
    path: '/studentlogin/question',/*question page can be accesed only after student logins*/
      name: 'Question',
      component: Question
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  }
  ]
  ,mode:'history'
})
