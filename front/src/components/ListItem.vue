<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="item in listItem" :key="item.id">
        <!--        포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!--        기타 정보 영역-->
        <div>
<!--          타이틀 영역-->
          <p class="news-title">
            <template v-if="item.type === 'link'">
              <a :href="item.url">
                {{item.title}}
              </a>
            </template>
            <template v-else>
              <a :href="`/item/${item.id}`">
                {{item.title}}
              </a>
            </template>

          </p>
          <small class="user-text">
            {{ item.time_ago }} by
            <router-link
                v-if="item.type !== 'job'"
                class="user-text" :to="`/user/${item.user}`"
            >
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ListItem',
  computed: {
    ...mapGetters([
      'getNews', 'getAsk', 'getJobs'
    ]),
    listItem () {
      return this.$store.state.list
    }
  }
  // ,
  // created () {
  //   if (this.$route.name === 'news') {
  //     this.$store.dispatch('FETCH_NEWS')
  // } else if (this.$route.name === 'ask') {
  //   this.$store.dispatch('FETCH_ASK')
  // } else if (this.$route.name === 'jobs') {
  //   this.$store.dispatch('FETCH_JOBS')
  // }
  // }
}
</script>

<style scoped>
.news-list {
  margin: 30px;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bbb;
}

.points {
  display: flex;
  align-items: center;
  width: 80px;
  height: 60px;
  justify-content: center;
  color: #117883;
}

.news-title {
  margin: 0;
}

.user-text {
  color: #828282;
}
</style>
