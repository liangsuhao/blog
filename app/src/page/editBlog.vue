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
      var data = {'data':this.$refs.editor.editorContent};
      console.log(data)
      axios.post('/blog-server/saveBlog',data,{
          transformRequest:[
                  function(data){
                      let params = '';
                      for(let index in data){
                          params +=index+'='+data[index]+'&';
                      }
                      return params;
                  }
          ]
      }).then(function(res){
        if(res){
          console.log(res.data)
        }
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