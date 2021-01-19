<template>
  <div>
    <div v-for="item in getJobs" :key="item.id">
      <a :href="item.url">{{item.title}}</a>
      <small>{{item.time_ago}} by {{item.domain}}</small>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'JobsView',
  computed: {
    ...mapGetters([
      'getJobs'
    ])
  },
  created () {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style scoped>

</style>
