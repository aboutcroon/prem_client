import Mock from 'mockjs'

// 温馨提醒
Mock.mock(/\/mock\/public\/tips/, 'get', () => {
  return {
    code: 200,
    data: [
      {
        title: '标题1',
        link: '链接',
        pic: '相关图片',
        isTop: '0',
        sortBy: '0',
        createTime: '2021-06-01 10:00:00'
      },
      {
        title: '标题2',
        link: '链接',
        pic: '相关图片',
        isTop: '0',
        sortBy: '0',
        createTime: '2021-06-02 06:00:00'
      },
      {
        title: '标题3',
        link: '链接',
        pic: '相关图片',
        isTop: '0',
        sortBy: '0',
        createTime: '2021-06-02 07:00:00'
      },
      {
        title: '标题4',
        link: '链接',
        pic: '相关图片',
        isTop: '0',
        sortBy: '0',
        createTime: '2021-06-02 16:00:00'
      }
    ]
  }
})
