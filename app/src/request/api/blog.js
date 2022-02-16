/*
博客模块
*/

import axios from '@/request/http';
import querystring from 'querystring';

// const baseUrl = "http://localhost:3000";
const baseUrl = "";

const blogApi = {
  getBlog(params){
    return axios.post(baseUrl + '/blog-server/getOne',querystring.stringify(params));
  },
  saveBlog(params){
    return axios.post(baseUrl + '/blog-server/saveBlog',params);
  },
  getBlogs(params){
    return axios.post(baseUrl + '/blog-server/getBlogs',querystring.stringify(params));
  },
  delBlog(params){
    return axios.post(baseUrl + '/blog-server/delBlog',querystring.stringify(params));
  },
  getImgLink(params){
    return axios.post(baseUrl + '/blog-server/uploadImg',params,{
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
};

export default blogApi;