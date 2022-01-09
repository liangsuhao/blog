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
    return axios.post('http://localhost:3000/blog-server/saveBlog',params);
  },
  getBlogs(params){
    return axios.post('http://localhost:3000/blog-server/getBlogs',querystring.stringify(params));
  },
  delBlog(params){
    return axios.post('http://localhost:3000/blog-server/delBlog',querystring.stringify(params));
  },
  getImgLink(params){
    return axios.post('http://localhost:3000/blog-server/uploadImg',params,{
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
};

export default blogApi;