<template>
    <div class="mainContent">
        <div v-for="(item) in contentData" :key="item.title">
            <div class="contentItem" @click="chooseBlog(item.id)">
                <div class="contentInfo">
                    <div class="blogTitle">{{item.title}} </div>
                    <div class="blogAbstract">摘要：{{item.abstract}}</div>
                    <div class="blogTime">博客时间：{{item.logTime}} &nbsp; {{item.tag}}</div>
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
        var params = {userId : 1};
        axios.post('http://localhost:3000/blog-server/getBlogs',params).then((res) => {
            if(res.data.flag){
                this.contentData = res.data.data;
                this.contentData.forEach(element => {
                    let date = new Date(element.logTime*1000 + 8 * 3600 * 1000);
                    element.logTime =  date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');
                });
            }
        })
    },
    methods: {
        chooseBlog: function(id){
            this.$router.push({path:'/showBlog?id='+id})
        },
        delBlog: function(id) {
            var params = {id : id};
            axios.post('http://localhost:3000/blog-server/delBlog',params).then((res) => {
                if(res.data.flag){
                    alert(res.data.msg);
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