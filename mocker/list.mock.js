const list = [];
for (let i = 1; i < 101; i++) {
    list.push({
        id: i,
        title: '王一博同款',
        note: '王一博同款-杭州x商场',
        extraText: '详情',
        详情: 'sketch',
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
