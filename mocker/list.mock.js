const list = [];
for (let i = 1; i < 101; i++) {
    list.push({
        id: i,
        carNumber: '云AC2691',
        start: '浙江省衢州市常山众卡产业园-杭州x商场',
        end: '北京天安门向东500米',
        orderId: 'LIH202006056359',
        createTime: '2020-06-08 23:40:00',
        status: '待审核',
    });
}

module.exports = {
    'POST /api/get/list': (req, res) => {
        const { page, pageSize } = req.body;
        let ite = [];
        for (let i = 0; i < list.length; i++) {
            if (i < page * pageSize && i >= (page - 1) * pageSize) {
                ite.push(list[i]);
            }
        }
        return res.status(200).json({
            message: '获取数据成功',
            data: {
                data: ite,
                total: 100,
            },
            code: 1,
        });
    },
};
