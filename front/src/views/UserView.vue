<template>
  <div>
    <p>{{ this.$store.state.user.id}}</p>
    <p>{{ this.$store.state.user.karma}}</p>
    <p>{{ this.$store.state.user.created}}</p>
  </div>
</template>

<script>
export default {
  name: 'UserView',
  created () {
    const username = this.$route.params.id
    this.$store.dispatch('FETCH_USER', username)
  }
}
</script>

<style scoped>

</style>
