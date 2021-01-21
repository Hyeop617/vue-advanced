<template>
  <div>
<!--    <ul>-->
<!--      <li class="post" v-for="item in getJobs" :key="item.id">-->
<!--        <div class="domain">-->
<!--          {{item.domain}}-->
<!--        </div>-->
<!--        <div>-->
<!--          <p class="title">-->
<!--            <a :href="item.url">-->
<!--              {{item.title}}-->
<!--            </a>-->
<!--          </p>-->
<!--          <small class="user-text">-->
<!--            {{item.time_ago}} by {{item.domain}}-->
<!--          </small>-->
<!--        </div>-->
<!--      </li>-->
<!--    </ul>-->
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
// import bus from '@/utils/bus'
// import { mapGetters } from 'vuex'
import ListMixin from '@/mixins/ListMixin'

export default {
  name: 'JobsView',
  components: {
    ListItem
  },
  mixins: [ListMixin]
  // ,
  // created () {
  //   bus.$emit('start:spinner')
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_JOBS')
  //       .then(() => {
  //         console.log('fetched')
  //         bus.$emit('end:spinner')
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }, 3000)
  // }
  // computed: {
  //   ...mapGetters([
  //     'getJobs'
  //   ])
  // },
  // created () {
  //   this.$store.dispatch('FETCH_JOBS')
  // }
}
</script>

<style scoped>
</style>
