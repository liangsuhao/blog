<template>
  <div class="header">
    <div class="hide"><i class="el-icon-s-fold"></i></div>
    <span class="headerName">{{ name }}</span>
    <span id="addContent" @click="writeContent">写文章</span>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    msg: String
  },
  data() {
    return {
      name: '梁素豪的博客',
    }
  },
  methods:{
    writeContent:function(){
      this.$router.push({path:'/editBlog'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #795548;
    align-items: center;
  }

  .header span {
    font-size: 24px;
    color: white;
  }
  .headerName{
    display: inline-block;
    margin-left: 80px;
    
  }
  .hide{
    font-size: 27px;
    margin: 20px;
  }
  #addContent {
    display: inline-block;
    font-size: 18px;
    position: relative;
    right: -850px;
    border: 1px solid;
    border-radius: 10px;
    padding: 1px;
    cursor: pointer;
  }
</style>
