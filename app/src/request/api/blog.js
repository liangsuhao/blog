/*
博客模块
*/

import axios from '@/request/http';
import querystring from 'querystring';

const blogApi = {
  getBlog(params){
    return axios.post('http://localhost:3000/blog-server/getOne',querystring.stringify(params));
  },
  saveBlog(params){
    return axios.post('http://localhost:3000/blog-server/saveBlog',querystring.stringify(params));
  },
  getBlogs(params){
    return axios.post('http://localhost:3000/blog-server/getBlogs',querystring.stringify(params));
  },
  delBlog(params){
    return axios.post('http://localhost:3000/blog-server/delBlog',querystring.stringify(params));
  }
};

export default blogApi;