import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: {}
  },
  getters: {
    getNews ({ news }) {
      return news
    },
    getJobs ({ jobs }) {
      return jobs
    },
    getAsk ({ ask }) {
      return ask
    },
    getUser ({ user }) {
      return user
    },
    getItem ({ item }) {
      return item
    }
  },
  mutations,
  actions

})
