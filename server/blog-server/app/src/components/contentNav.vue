<template>
    <div class="mainContent">
        <div v-for="(item) in contentData" :key="item.title">
            <div class="contentItem" @click="chooseBlog(item.id)">
                <div class="contentInfo">
                    <div class="blogTitle">{{item.title}} </div>
                    <div class="blogTime">书写时间:{{item.logTime}} &nbsp; {{item.tag}}</div>
                </div>
                <div class="delBlog" @click.stop="delBlog(item.id)"><i class="el-icon-delete"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from  'axios'
export default {
    name : 'contentNav',
    data() {
        return {
            contentData : []
        }
    },
    created:function(){
        this.getAllBlogs();
    },
    methods: {

        getAllBlogs: function() {
            var params = {};
            this.$api.blogApi.getBlogs(params).then((res) => {
                if(res.data.flag){
                    this.contentData = res.data.data;
                    this.contentData.forEach(element => {
                        let date = new Date(element.logTime*1000 + 8 * 3600 * 1000);
                        element.logTime =  date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');
                    });
                }
            }).catch((e)=>{console.log(e)})
        },

        chooseBlog: function(id){
            this.$router.push({path:'/user/showBlog?id='+id})
        },

        delBlog: function(id) {
            var params = {id : id};
            // axios.post('http://localhost:3000/blog-server/delBlog',params).then((res) => {
            this.$api.blogApi.delBlog(params).then((res)=>{
                if(res.data.flag){
                    this.$message({message:res.data.msg, type:'success'});
                    this.getAllBlogs();
                } else {
                    this.$message.error(res.data.msg);
                }
            })
        }
    }
}
</script>

<style scoped>
    .mainContent{
        height: 100%;
    }
    .contentItem{
        line-height: 30px;
        width: 700px;
        background-color: #f1f1f1;
        padding-left: 10px;
        margin: 10px;
        cursor: pointer;
        border-radius: 10px;
    }

    .blogTitle {
        font-size: 20px;
    }

    .blogAbstract {
        font-size:16px;
    }

    .blogTime {
        font-size: 12px;
    }

    .delBlog {
        position: relative;
        top: -33px;
        float: right;
        right: 6px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        text-align: center;
    }

    .delBlog:hover {
        background-color: #cccccc;
    }
    

</style>