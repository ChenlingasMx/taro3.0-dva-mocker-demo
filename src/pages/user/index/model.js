import {getList} from '../../../servers/user'

export default {
        namespace: 'user',
        state: {
            test:'test',
            sourceList : [
                    {id:1,title:'钻石',note:'我是一颗钻石',extraText:"详情",icon:"sketch"},
                    {id:2,title:'钻石',note:'我是一颗钻石',extraText:"详情",icon:"sketch"},
                    {id:3,title:'钻石',note:'我是一颗钻石',extraText:"详情",icon:"sketch"},
                    {id:4,title:'钻石',note:'我是一颗钻石',extraText:"详情",icon:"sketch"},
                    {id:5,title:'钻石',note:'我是一颗钻石',extraText:"详情",icon:"sketch"},
                    {id:6,title:'钻石',note:'我是一颗钻石',extraText:"详情",icon:"sketch"},
                    {id:7,title:'钻石',note:'我是一颗钻石',extraText:"详情",icon:"sketch"},
            ],
            List:[]
        },
        effects: {
        *getList({ payload }, { call, put }) {
                const data = yield call(getList, payload);
                if(data.code==1){
                    yield put({
                        type: 'updateData',
                        payload: { List:data.data||[]}
                    });
                }
        }
        },
        reducers: {
        updateData(state, { payload }) {
                return { ...state, ...payload };
              },
        }
    }