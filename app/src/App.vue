<template>
  <div id="app">
    <v-leftNav />
    <div class="rightNav">
      <v-header />
      <v-contentNav />
    </div>
  </div>
</template>

<script>
import header from './components/header.vue'
import leftNav from './components/leftNav'
import contentNav from './components/contentNav'

export default {
  name: 'App',
  components: {
    'v-header' : header,
    'v-leftNav' : leftNav,
    'v-contentNav' : contentNav,
  }
}
</script>

<style scoped>
  .rightNav{
    margin-left: 100px;
  }
</style>
