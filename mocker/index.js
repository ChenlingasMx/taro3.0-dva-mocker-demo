const delay = require('mocker-api/lib/delay');
const list = require('./list.mock');
// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
  _proxy: {

    // http://10.10.103.79:8001
    proxy: {
      
    },
  },
  changeHost: true,
  ...list,
};

module.exports = noProxy ? { ...proxy } : delay(proxy, 100);
// module.exports = proxy;
