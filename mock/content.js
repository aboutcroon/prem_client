import Mock from 'mockjs'

Mock.mock(/\/mock\/public\/list/, 'get', () => {
  return {
    code: 200,
    data: []
  }
})
