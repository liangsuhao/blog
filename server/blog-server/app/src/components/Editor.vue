
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
          editor: null,
        }
      },
      props: {
        title: {type:String,default:""},
        editorContent : {type:String,default:""}
      },
      methods: {
        getContent: function () {
            alert(this.getHtml())
        },
        getHtml () {
          // 得到文本内容
          return this.editor.txt.html()
        },
        setHtml(txt) {
          this.editor.txt.html(txt)
        },
        getRichText() {
          this.editor.config.showLinkImg = false; //隐藏网络图片上传
          this.editor.config.uploadImgShowBase64 = true; //图片以base64形式保存
          this.editor.config.uploadFileName = "file";
    
          this.editor.config.customUploadImg = (files, insert) => {
            const formData = new FormData();
            formData.append('img',files[0]);
            // 获取图片链接
            this.$api.blogApi.getImgLink(formData)
              .then((res) => {
                console.log(res)
                const flag = res.data.flag;
                if (flag) {
                  // this.imgList = res.data.content;
                  // for(let i=0; i<this.imgList.length;i++){
                  //   //图片回显
                    insert(res.data.content)
                  // };
                } else {
                  this.$messsage.error(res.data.msg);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          };
          this.editor.create(); // 创建富文本实例
        },
      },
      watch: {
        // editorContent: function (newContent, oldContent) {
        //   editor.txt.html(newContent);
        // }
      },
      mounted() {
        var editor = new E(this.$refs.editor)
        this.editor = editor;
        this.getRichText();
        if(props && props.editorContent) {
          this.setHtml(props.editorContent);
        }
      }
    }
</script>
 
<style scoped>
  .abstract{
    margin: 2px;
    text-align: center;
  }
</style>