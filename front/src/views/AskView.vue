<template>
  <div>
    <div v-for="item in getAsk" :key="item.id">
      <router-link :to="`/item/${item.id}`">
        {{item.title}}
      </router-link>
<!--      <a :href="item.url">{{ item.title }}</a>-->
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
  name: 'AskView',
  computed: {
    ...mapGetters([
      'getAsk'
    ])
  },
  created () {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style scoped>

</style>
