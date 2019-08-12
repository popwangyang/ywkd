//@Time    : 2018/7/6
//@Author  : lidong
//@Email   : lidong@hlchang.cn
//@File    : api.js
//@Software: webstrom
//@license : 娱网科道信息技术有限公司 copyright 2016-2017
import axios from 'axios';
import  {Base64}  from 'js-base64';
var base = '';
var url = window.location.href;
if(url.indexOf('info') > -1){
  base = 'https://info.bjywkd.com';
}else if(url.indexOf('pre') > -1){
  base = 'https://pre.bjywkd.com';
}else if(url.indexOf('test') > -1 || url.indexOf('localhost') > -1){
  base = 'https://test.bjywkd.com';
  // base = 'http://59.63.188.34:8080'
  // base='http://192.168.4.108:8000';
}else if(url.indexOf('dev') > -1){
  base = 'https://dev.bjywkd.com';
}else {
  base = 'http://59.63.188.34:8080'
}
const http = axios.create({
  baseURL: base,
});
// http 响应 拦截器
http.interceptors.response.use(
  response => {
    //如果接口返回500016状态码就返回登录页面
    if(response.data.status==500102|| response.data.status==500104 ||response.data.status==500101){
      baseJs('removeItem','menus');
      baseJs('removeItem','actions');
      baseJs('removeItem','OAth');
      window.location.reload();
      router.replace({
        path: 'login',
        query: {redirect: router.currentRoute.fullPath}
      })
    }
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          // store.commit(types.LOGOUT);
          baseJs('removeItem','menus');
          baseJs('removeItem','token');
          window.location.reload();
           router.push('/Login');
          this.$router.replace({
            path: '/Login',
            query: {redirect: this.$router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error)   // 返回接口返回的错误信息
  });
// http 请求 拦截器
http.interceptors.request.use(
  config => {
    let user;
    if(baseJs('getItem','token')!=undefined){
      user = JSON.parse(baseJs('getItem','token'));
    }else{
      user = null;
    }
    if (user != null) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = 'Bearer ' + user;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

//登录
export const login = (url,params) => { return http({
  headers: {
    'Content-Type':'application/json;'
  },
  url:url,
  method:"POST",
  data: params
}).then(res => res)};
//post请求
export const post = (url,params) => { return http({
  headers: {
    'Content-Type':'application/json;'
  },
  url:url,
  method:"POST",
  data:params
}).then(res => res)};
//get请求
export const get = (url,params) => { return http({
  headers: {
    'Content-Type':'application/json;',
  },
  url:url,
  method:"GET",
  params:params
}).then(res => res)};
//patch请求
export const patch = (url,params) => { return http({
  headers: {
    'Content-Type':'application/json;'
  },
  url:url,
  method:"PATCH",
  data:JSON.stringify(params)
}).then(res => res)};
//patch请求
export const ktvpatch = (url,params) => { return http({
  headers: {
    'Content-Type':'application/json;'
  },
  url:url,
  method:"PATCH",
  data:JSON.stringify(params)
}).then(res => res)};
//VIEW请求
export const VIEW = (url,params) => { return http({
  headers: {
    'Content-Type':'application/json;'
  },
  url:url,
  method:"VIEW",
  data:JSON.stringify([params])
}).then(res => res)};
//DELETE请求
export const DELETE = (url,params) => { return http({
  headers: {
    'Content-Type':'application/json;'
  },
  url:url,
  method:"DELETE",
  data:JSON.stringify([params])
}).then(res => res)};
//put请求
export const put = (url,params) => { return http({
  headers: {
    'Content-Type':'application/json;'
  },
  url:url,
  method:"PUT",
  data:params
}).then(res => res)};
//版权金设置的删除
export const copyrightDELETE = (url,params) => { return http({
  headers: {
    'Content-Type':'application/json;'
  },
  url:url,
  method:"DELETE",
  data:params
}).then(res => res)};
export const baseUrl=base;
//vod
export const patchVod = (url,params) => { return http({
  headers: {
    'Content-Type':'application/json;',
    "Accept": "application/vnd.bjywkd.com-v2+json"
  },
  url:url,
  method:"PATCH",
  data:JSON.stringify([params])
}).then(res => res.data)};
//获取菜单的权限的数据
export const menus=function(){
  let str=Base64.encode('menus');
  if(window.localStorage.getItem(str)){
    let deCode=Base64.decode(window.localStorage.getItem(str));
    return JSON.parse(deCode);
  }else{
    return undefined
  }
}();
//获取按钮的权限的数据
// export const actions=function(){
//   let str=Base64.encode('actions');
//   if(localStorage.getItem(str)){
//     let deCode=Base64.decode(localStorage.getItem(str));
//     return JSON.parse(deCode);
//   }else{
//     return undefined
//   }
// }();
//获取用户的权限的数据
export const token=function(){
  let str=Base64.encode('token');
  if(window.localStorage.getItem(str)){
    let deCode=Base64.decode(window.localStorage.getItem(str));
    return JSON.parse(deCode);
  }else{
    return undefined
  }
}();
//base64加密
export const baseJs=(type,name,val)=> {
  switch (type){
    case 'setItem':
      window.localStorage.setItem(Base64.encode(name),Base64.encode(val));
      break;
    case 'getItem':
      let str=Base64.encode(name);
      if(window.localStorage.getItem(str)){
        let deCode=Base64.decode(window.localStorage.getItem(str));
        return deCode;
      }else{
        return undefined
      }
      break;
    case 'removeItem':
      window.localStorage.removeItem(Base64.encode(name));
      break;
  }
};


