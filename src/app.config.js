export default {
  pages: [
    'pages/home/index/index',
    'pages/user/index/index',
    'pages/account/login/index'
  ],
  debug:true,
  // tabBar:{
  //   color: "#666",
  //   selectedColor: "#b4282d",
  //   backgroundColor: "#fafafa",
  //   borderStyle: 'black',
  //   list:[
  //     {
  //       text:'首页',
  //       pagePath:'pages/home/index/index',
  //       iconPath:"./utils/img/HOME MESSAGE.png",
  //       selectedIconPath:"./utils/img/HOME MESSAGE.png"
  //     },
  //     {
  //       text:'用户',
  //       pagePath:'pages/user/index/index',
  //       iconPath:"./utils/img/user.png",
  //       selectedIconPath:"./utils/img/user.png"
  //     },
  //     {
  //       text:'登陆',
  //       pagePath:'pages/account/login/index',
  //       iconPath:"./utils/img/user.png",
  //       selectedIconPath:"./utils/img/user.png"
  //     }
  //   ]
  // },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
