<template>
  <div>
<!--    <ul class="news-list">-->
<!--      <li class="post" v-for="item in getAsk" :key="item.id">-->
<!--        <div class="points">-->
<!--          {{item.points || 0}}-->
<!--        </div>-->
<!--        <div>-->
<!--          <p>-->
<!--            <a :href="`/item/${item.id}`">-->
<!--              {{item.title}}-->
<!--            </a>-->
<!--          </p>-->
<!--          <small class="user-text">-->
<!--            {{ item.time_ago }} by-->
<!--            <router-link :to="`/user/${item.user}`">-->
<!--              {{item.user}}-->
<!--            </router-link>-->
<!--          </small>-->
<!--        </div>-->
<!--      </li>-->
<!--    </ul>-->
    <list-item></list-item>
    <!--
    <div v-for="item in getAsk" :key="item.id">
      <router-link :to="`/item/${item.id}`">
        {{item.title}}
      </router-link>
      <a :href="item.url">{{ item.title }}</a>
      <small>
        {{item.time_ago}} by
        <router-link :to="`/user/${item.user}`">
          {{item.user}}
        </router-link>
      </small>
    </div>
    -->
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
// import bus from '@/utils/bus'
// import { mapGetters } from 'vuex'
import ListMixin from '@/mixins/ListMixin'

export default {
  name: 'AskView',
  components: {
    ListItem
  },
  mixins: [ListMixin]
  // ,
  // created () {
  //   bus.$emit('start:spinner')
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_ASK')
  //       .then(() => {
  //         console.log('fetched')
  //         bus.$emit('end:spinner')
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }, 3000)
  // }
  // ,
  // computed: {
  //   ...mapGetters([
  //     'getAsk'
  //   ])
  // },
  // created () {
  //   this.$store.dispatch('FETCH_ASK')
  // }
}
</script>

<style scoped>
</style>
