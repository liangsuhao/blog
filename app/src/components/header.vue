<template>
  <div class="header">
    <!-- <div class="hide"><i class="el-icon-s-fold"></i></div> -->
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
      name: '早睡早起方能养生',
    }
  },
  methods:{
    writeContent:function(){
      this.$router.push({path:'/user/editBlog'})
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
    background-color: #c5def7;
    align-items: center;
  }

  .header span {
    font-size: 24px;
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
    position: fixed;
    right: 50px;
    border: 1px solid;
    border-radius: 10px;
    padding: 1px;
    cursor: pointer;
  }
</style>
