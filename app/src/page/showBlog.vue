<template>
  <div>
    <div class="showBlog">
      <div class="title"> {{title}} </div>
      <div class="content" v-html="content"></div>
    </div>
    <div class="editBlog" @click="editBlog"><i class="el-icon-edit"></i></div>
  </div>
</template>

<script> 
import axios from  'axios'

export default {
  name: 'showBlog',
  components : {
    
  },
  data(){
    return {
      title : '',
      content : "",
      id : null,
    }
  },
  methods:{
    getBlog: function(id){
      var data = {id: id};
      // axios.post('http://localhost:3000/blog-server/getOne',data).then((res)=>{
      this.$api.blogApi.getBlog(data).then((res)=>{
        if(res.data.flag){
          this.title = res.data.data.title;
          this.content = res.data.data.content;
        }
      }).catch(function (error) {
        console.log(error);
      });
    },

    editBlog: function(){
      this.$router.push({path:"/user/editBlog?id="+this.id});
    }
  },
  created:function () {
    this.id = this.$route.query.id;
    console.log(this.id)
    this.getBlog(this.id);
  }

}
</script>

<style scoped>
  .showBlog {
    margin: 5px;
  }
  .title{
    font-size: 20px;
    text-align: center;
  }
  .editBlog {
    width: 50px;
    background-color: #cccccc4f;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    position: absolute;
    bottom: 30px;
    right: 30px;
    cursor: pointer;
  }
</style>