<template>
  <div>
    <Editor ref="editor" v-bind:title="title" v-bind:editorContent="editorContent"></Editor>
    <el-button class="finishBlog" @click="finishBlog">完成编辑</el-button>
  </div>
</template>

<script> 
import Editor from './../components/Editor'
import axios from  'axios'

export default {
  name: 'editBlog',
  components : {
    Editor,
  },
  data(){
    return {
      editor : null,
      id : null,
      title : "",
      editorContent : "",
    }
  },
  methods:{
    finishBlog: function(){
      var data = {id:this.id,content:this.$refs.editor.editorContent ,title:this.$refs.editor.title};
      axios.post('http://localhost:3000/blog-server/saveBlog',data).then(function(res){
        if(res.data.flag){
          alert(res.data.msg)
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
  created:function () {
    this.id = this.$route.query.id;
    if(this.id){
      var params = {id:this.id}
      axios.post('http://localhost:3000/blog-server/getOne',params).then((res)=>{
        if(res.data.flag){
          this.title = res.data.data.title;
          this.editorContent = res.data.data.content;
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  }

}
</script>

<style scoped>
  .finishBlog{
    float: right;
  }
</style>