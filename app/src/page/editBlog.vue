<template>
  <div>
    <Editor ref="editor"></Editor>
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
    }
  },
  methods:{
    finishBlog: function(){
      var data = {content:this.$refs.editor.editorContent ,title:this.$refs.editor.title};
      axios.post('http://localhost:3000/blog-server/saveBlog',data).then(function(res){
        if(res.data.flag){
          // this.$alert(res.data.msg, '标题名称', {
          //   confirmButtonText: '确定',
          // callback: action => {
          //   this.$message({
          //     type: 'info',
          //     message: `action: ${ action }`
          //   });
          // }
          // });
          alert(res.data.msg)
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
  created:function () {
  }

}
</script>

<style scoped>
  .finishBlog{
    float: right;
  }
</style>