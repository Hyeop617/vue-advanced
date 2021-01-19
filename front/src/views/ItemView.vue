<template>
  <div>
    <section>
      <!--      질문 상세 정보-->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${getItem.user}`">
            {{ getItem.user }}
          </router-link>
          <div class="time">
            {{getItem.time_ago}}
          </div>
        </div>
      </div>
      <h2>{{ getItem.title }}</h2>
    </section>
    <section>
      <!--      질문 댓글-->
    </section>
    <!--    <p>{{getItem.title}}</p>-->
    <!--    <p>{{getItem.content}}</p>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ItemView',
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
