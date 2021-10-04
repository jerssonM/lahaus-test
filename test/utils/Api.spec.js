import Api from '@/utils/Api'

describe('Api', () => {
  test('is a singleton', () => {
    const api = Api.getInstance()
    expect(api).toBeInstanceOf(Api)
  })
  test('contains title', () => {
    const api = Api.getInstance()
    api.initApi('')
    expect(api.getEstates).toBeInstanceOf(Function)
  })
})
