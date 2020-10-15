export default {
  pages: [
    'pages/home/index/index',
    'pages/user/index/index',
    'pages/im/index/index',
    'pages/account/login/index'
  ],
  debug:true,
  tabBar:{
    list:[
      {
        text:'首页',
        pagePath:'pages/home/index/index'
      },
      {
        text:'聊天',
        pagePath:'pages/im/index/index'
      },
      {
        text:'用户',
        pagePath:'pages/user/index/index'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
