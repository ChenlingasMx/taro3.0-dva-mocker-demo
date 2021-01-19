import { getList } from '../../../servers/user'
import image1 from '../../../utils/img/1000.png'

export default {
    namespace: 'user',
    state: {
        test: 'test',
        sourceList: [
            {title:'AJ1 Dunk 脏橘色',note:'王一博同款2.0',extraText:"查看详情",id:1,img:image1},
            {title:'AJ1 Dunk 脏橘色',note:'王一博同款2.0',extraText:"查看详情",id:2,img:image1},
            {title:'AJ1 Dunk 脏橘色',note:'王一博同款2.0',extraText:"查看详情",id:3,img:image1},
            {title:'AJ1 Dunk 脏橘色',note:'王一博同款2.0',extraText:"查看详情",id:4,img:image1},
            {title:'AJ1 Dunk 脏橘色',note:'王一博同款2.0',extraText:"查看详情",id:5,img:image1},
            {title:'AJ1 Dunk 脏橘色',note:'王一博同款2.0',extraText:"查看详情",id:6,img:image1},
            {title:'AJ1 Dunk 脏橘色',note:'王一博同款2.0',extraText:"查看详情",id:7,img:image1},
            {title:'AJ1 Dunk 脏橘色',note:'王一博同款2.0',extraText:"查看详情",id:8,img:image1},
            {title:'AJ1 Dunk 脏橘色',note:'王一博同款2.0',extraText:"查看详情",id:9,img:image1},
            {title:'AJ1 Dunk 脏橘色',note:'王一博同款2.0',extraText:"查看详情",id:10,img:image1}

        ],
        page: 1,
        pageSize: 20,
        searchValue:'',// 搜索
    },
    effects: {
        *getList(_, { call, put, select }) {
            const params = yield select(({ user }) => ({
                page: user.page,
                pageSize: user.pageSize
            }))
            const data = yield call(getList, params);
            if (data.code == 1) {
                yield put({
                    type: 'updateData',
                    payload: { sourceList: data.data.data || [] }
                });
            }
        }
    },
    reducers: {
        updateData(state, { payload }) {
            return { ...state, ...payload };
        },
    }
}