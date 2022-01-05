<template>
    <div class="leftNav">
        <!-- <div class="photo">
            <img src="../assets/photo1.jpeg" alt="头像" style="width:190px;height:auto"  @click="goHome">
            <div class="name">{{name}}</div>
            <div class="abstract">{{abstract}}</div>
        </div> -->
        <el-menu
            style="height:100%"
            default-active="2"
            :collapse="isCollapse"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="1">
                <i class="el-icon-location"></i>
                <span>博客主页</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">自我介绍</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4" disabled>
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
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
        /* background: rgb(211, 211, 195); */
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
