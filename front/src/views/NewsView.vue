<template>
  <div>
    <div v-for="item in getNews" :key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small>
        {{item.time_ago}} by
        <router-link :to="`/user/${item.user}`">
          {{item.user}}
        </router-link>
      </small>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NewsView',
  computed: {
    ...mapGetters([
      'getNews'
    ])
  },
  created () {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style scoped>

</style>
