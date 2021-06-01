<template>
  <div id="app">
    <v-user></v-user>
  </div>
</template>

<script>
import user from './page/user'
import editBlog from './page/editBlog'

export default {
  name: 'App',
  components: {
    'v-user' : user,
    'v-editBlog' : editBlog,
  }
}
</script>