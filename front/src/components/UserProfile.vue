<template>
  <div>
    <section>
      <!--      질문 상세 정보-->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <div>
            <slot name="username">
<!--              상위 컴포넌트에서 정의할 영역-->
            </slot>
          </div>
          <div class="time">
            <slot name="time">
<!--              상위 컴포넌트에서 정의할 영역-->
            </slot>
          </div>
          <slot name="karma">
            <!--              상위 컴포넌트에서 정의할 영역-->
          </slot>
        </div>
      </div>
    </section>
    <section>
      <!--      질문 댓글-->
      <div v-html="userInfo.content"></div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  name: 'UserProfile',
  computed: {
    userInfo () {
      return this.$store.state.user
    }
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
