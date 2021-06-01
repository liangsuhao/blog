
<template>
    <div>
        <div class="abstract">请开始你的表演</div>
        <div><el-input placeholder="请输入标题" v-model="title" ><template slot="prepend">标题：</template></el-input></div>
        <div ref="editor" style="text-align:left"><div v-html="editorContent"></div></div>
        <button v-on:click="getContent">查看内容</button>
    </div>
</template>
 
<script>
    import E from 'wangeditor'
    export default {
      name: 'editor',
      data () {
        return {
          editorContent: '',
          title:'',
        }
      },
      props: {
        title: {type:String,default:""},
        editorContent : {type:String,default:""}
      },
      methods: {
        getContent: function () {
            alert(this.editorContent)
        }
      },
      watch: {
        editorContent: function (newContent, oldContent) {
          editor.txt.html(newContent);
        }
      },
      mounted() {
        var editor = new E(this.$refs.editor)
        editor.config.onchange = (html) => {
          this.editorContent = html
        }
        editor.create()
      }
    }
</script>
 
<style scoped>
  .abstract{
    margin: 2px;
    text-align: center;
  }
</style>