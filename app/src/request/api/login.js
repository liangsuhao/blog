/*
登录注册模块
*/

import axios from '@/request/http';
import querystring from 'querystring';

const signApi = {
  //登录
  loginin(params){
    return axios.post('/signin/',querystring.stringify(params));
  },
  //注册
  signup(params){
    return axios.post('/signup/',querystring.stringify(params));
  },
  //登出
  signout(params){
    return axios.get('/signout/',{params: params});
  },
};

export default signApi;