import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/unused/NewsView'
import AskView from '../views/unused/AskView'
import JobsView from '../views/unused/JobsView'
import UserView from '../views/UserView'
import ItemView from '../views/ItemView'
// import createListView from '@/views/CreateListView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'news'
  },
  {
    // path : url 주소
    path: '/news',
    name: 'news',
    // component : url 주소로 갔을 때 표시 될 컴포넌트
    // component: createListView('NewsView')
    component: NewsView
  },
  {
    path: '/ask',
    name: 'ask',
    // component: createListView('AskView')
    component: AskView
  },
  {
    path: '/jobs',
    name: 'jobs',
    // component: createListView('JobsView')
    component: JobsView
  },
  {
    path: '/item/:id',
    name: 'item',
    component: ItemView
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserView
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
