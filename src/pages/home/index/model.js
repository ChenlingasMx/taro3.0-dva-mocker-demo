import Taro from '@tarojs/taro'
import { userLoginCode, reducers } from '@/servers/servers'
export default {
        namespace: 'index',
        state: {
                test: 'test',
                userInfo: ''
        },
        effects: {
                *userLoginCode({ payload }, { call, put }) {
                        const respones = yield call(userLoginCode, payload);
                        if(respones.error==0){
                            yield put({
                                type: 'save',
                                payload: { userInfo:respones.result.userInfo}
                            });
                        }
                }
        },
        reducers
}