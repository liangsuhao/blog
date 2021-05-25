<template>
  <div>
    <v-leftNav />
      <div class="rightNav">
        <v-header />
        <v-contentNav />
      </div>
  </div>
</template>

<script>

import header from '../components/header'
import leftNav from '../components/leftNav'
import contentNav from '../components/contentNav' 

export default {
  name: 'user',
  components: {
    'v-header' : header,
    'v-leftNav' : leftNav,
    'v-contentNav' : contentNav,
  }
}
</script>

<style scoped>
  .rightNav{
    margin-left: 200px;
  }
</style>