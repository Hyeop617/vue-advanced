<template>
  <div>
    <section>
    <user-profile :info="getItem">
<!--      <div slot="username">{{getItem.user}}</div>-->
      <router-link slot="username" :to="`/user/${getItem.user}`">
        {{getItem.user}}
      </router-link>
      <template slot="time">
       {{'Posted ' + getItem.time_ago}}
      </template>
    </user-profile>
    </section>
    <section>
      <h2>{{ getItem.title }}</h2>
    </section>
    <section>
      <!--      질문 댓글-->
      <div v-html="getItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile'
import { mapGetters } from 'vuex'

export default {
  name: 'ItemView',
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters([
      'getItem'
    ])
  },
  created () {
    const id = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', id)
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 12px;
}

.fa-user {
  font-size: 2rem;
}

</style>
