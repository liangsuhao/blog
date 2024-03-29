//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引用page1页面
import contentNav  from './components/contentNav';
//引用page2页面
import editBlog  from './page/editBlog';
import showBlog from './page/showBlog';
import login from './page/login';
import user from './page/user'

//定义routes路由的集合，数组类型
const routes=[
    //单个路由均为对象类型，path代表的是路径，component代表组件
    {
        path:'/',
        component:login,
    },
    {
        path:'/login',
        component:login,
    },
    {
        path:'/user',
        component:user,
        children:[
            {path:'contentNav',component:contentNav},
            {path:'editBlog',component:editBlog},
            {path:'',component:contentNav},
            {path:'showBlog',component:showBlog}
        ]
    }
]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
//ES6简写，等于routes：routes
    mode : 'history',
    routes : routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) { // 如果没有匹配到路由
        // 跳转回到原来的页面或者首页
        from.name ? next({ name:from.name }) : next('/');
    } else {
        next();
    }
})

//抛出这个这个实例对象方便外部读取以及访问
export default router