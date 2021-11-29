<template>
    <div class="leftNav">
        <div class="photo">
            <img src="../assets/photo1.jpeg" alt="头像" style="width:190px;height:auto"  @click="goHome">
            <div class="name">{{name}}</div>
            <div class="abstract">{{abstract}}</div>
        </div>
        <div class="info">
            <div class="operate">
                <el-tree style="background:inherit;font-size:30px" :data="options" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'leftNav',
    data() {
        return{
            options: [
                {
                    label:'主页',
                },
                {
                    label:"日期",
                    children:[{
                        label:"2021-03",
                    },{
                        label:"2021-02"
                    },{
                        label:"2021-01"
                    },{
                        label:"2020-12"
                    },{
                        label:"2020-11"
                    },{
                        label:"2020-10"
                    }]
                },{
                    label:"分类",
                    children:[{
                        label:"技术"
                    },{
                        label:"生活"
                    },{
                        label:"编程语言"
                    },{
                        label:"娱乐文章"
                    }]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    methods: {
        goHome: function(){
            this.$router.push({path:"/user/contentNav"});
        }
    }

}
</script>

<style scoped>
    .leftNav{
        float: left;
        widows: 200px;
        background: rgb(211, 211, 195);
        height: 100vh;
        width: 200px;
    }
    .photo{
        /* background: url(./../assets/logo.png); */
        width: 200px;
        height: 200px;
    }
    .operate{
        width: 170px;
        padding-left:15px
    }
</style>
