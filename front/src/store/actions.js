import {
  fetchAskList,
  fetchJobsList,
  fetchNewsList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList
} from '@/api'

export default {
  FETCH_NEWS (context) {
    return fetchNewsList()
      .then(res => {
        context.commit('SET_NEWS', res.data)
        return res
      })
      .catch(err => {
        console.log(err)
      })
  },
  FETCH_JOBS ({ commit }) {
    return fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  FETCH_ASK ({ commit }) {
    return fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  FETCH_USER ({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  FETCH_ITEM ({ commit }, id) {
    return fetchItemInfo(id)
      .then(({ data }) => {
        commit('SET_ITEM', data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  FETCH_LIST ({ commit }, name) {
    return fetchList(name)
      .then(res => {
        commit('SET_LIST', res.data)
        return res
      })
      .catch(err => {
        console.log(err)
      })
  }
}
