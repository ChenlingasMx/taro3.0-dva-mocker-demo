const getBaseUrl = (url) => {
  let BASE_URL = '';
  if (process.env.NODE_ENV === 'development') {
    //开发环境 - 根据请求不同返回不同的BASE_URL
    BASE_URL='http://192.168.124.128:7878/'
  } else {
    BASE_URL='http://api.wuding.co/'
  }
  return BASE_URL
}

export default getBaseUrl;
