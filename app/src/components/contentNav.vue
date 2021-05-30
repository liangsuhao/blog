<template>
    <div class="mainContent">
        <el-card v-for="(item) in contentData" :key="item.title">
            <div class="contentItem">
                <div><img :src="item.picture" :alt="item.title"></div>
                <div class="contentInfo">
                    <div>{{item.title}} &nbsp; {{item.log_time}} &nbsp; {{item.tag}}</div>
                    <div>{{item.abstract}}</div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name : 'contentNav',
    data() {
        return {
            contentData : [
                {
                    "title" : "第一篇博客",
                    "abstract" : "这是我的第一篇博客",
                    "log_time" : "2020-03-04",
                    "tag" : "技术",
                    "writer" : "梁素豪",
                    "picture" : "require('../assets/logo.png')"
                },
                {
                    "title" : "第二篇博客",
                    "abstract" : "这是我的第二篇博客",
                    "log_time" : "2020-03-07",
                    "tag" : "娱乐",
                    "writer" : "梁素豪",
                    "picture" : "./../assets/logo.png"
                }
            ]
        }
    },
    created:{
        
    }


}
</script>

<style scoped>
    .mainContent{
        height: 100%;
        background: green;
    }
    .contentItem{
        height: 200px;
        width: 700px;
        background-color: #f1f0d7;
    }
</style>