import { getList } from '../../../servers/user'

export default {
    namespace: 'user',
    state: {
        test: 'test',
        sourceList: [],
        page: 1,
        pageSize: 20
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