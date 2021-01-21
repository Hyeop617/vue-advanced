<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from '@/components/common/ToolBar'
import Spinner from '@/components/Spinner'
import bus from './utils/bus'

export default {
  name: 'App',
  components: {
    ToolBar,
    Spinner
  },
  data () {
    return {
      loadingStatus: false
    }
  },
  methods: {
    startSpinner () {
      this.loadingStatus = true
    },
    endSpinner () {
      this.loadingStatus = false
    }
  },
  created () {
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
  },
  beforeDestroy () {
    // bus.$off('start:spinner', this.startSpinner)
    // bus.$off('end:spinner', this.endSpinner)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

body {
  padding: 0;
  margin: 0;
}

a {
  color: #344559;
  text-decoration: none;
}

a:hover {
  color: #117883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
