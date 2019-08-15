import Vue from 'vue'
import Router from 'vue-router'

//首页
import Home from '@/Views/Home'
import newDetail from '@/Views/newDetail'
//鲸选曲库
import Genuine from '@/Views/Genuine'
import Entertainment from '@/Views/Entertainment'
import Clouds from '@/Views/Clouds'
import Manage from '@/Views/Manage'
import Sing from '@/Views/Sing'
import Us from '@/Views/Us'
import SongList from '@/Views/SongList'
import Help from '@/Views/Help'

//鲸易版权
import CopyRight from '@/Views/CopyRight/CopyRight'


//检测数据是否存在
function contain(name,menus){
  if (menus == '' || menus == null) {
    return false
  }
  var i = menus.length;
  while (i--) {
    if (menus[i] === name) {
      return true;
    }
  }
  return false;
}

Vue.use(Router);

 const router = new Router({
  routes: [
    {
      path:'/',
      redirect:'/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/newDetail',
      name: 'newDetail',
      component: newDetail,
    },
    {
      path: '/Genuine',
      name: 'Genuine',
      component: Genuine,
    },
    {
      path: '/Entertainment',
      name: 'Entertainment',
      component: Entertainment,
    },
    {
      path: '/Sing',
      name: 'Sing',
      component: Sing,
    },
    {
      path: '/Manage',
      name: 'Manage',
      component: Manage,
    },
     {
      path: '/Us',
      name: 'us',
      component: Us,
    },
     {
      path: '/SongList',
      name: 'SongList',
      component: SongList,
    },
    {
      path: '/Clouds',
      name: 'Clouds',
      component: Clouds,
    },
    {
      path: '/Help',
      name: 'Help',
      component: Help,
    },
    {
      path: '/CopyRight',
      name: 'CopyRight',
      component: CopyRight,
    },
  ]
});

//全局路由守卫
// router.beforeEach((to,from,next)=>{
//   //判断用户有没有登录没有直接跳到login页面
//   let menus = baseJs('getItem','menus');
//   let token = baseJs('getItem','token');
//   if (!token &&to.path !== '/Login'&&to.path !== '/ForgetPsw'&&!menus) {
//     next({ path: '/Login' });
//     localStorage.removeItem('token');
//     localStorage.removeItem('menus');
//   } else {
//     next()
//   }
// });

export default router;
