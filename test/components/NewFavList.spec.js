import { mount } from '../testUtils'
import NewFavoriteList from '@/components/NewFavoriteList.vue'

describe('NewFavoriteList', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NewFavoriteList)
    expect(wrapper.vm).toBeTruthy()
  })
  test('contains description', () => {
    const wrapper = mount(NewFavoriteList)
    const navbarElements = wrapper.find('p')
    expect(navbarElements.text()).toContain('createNewList')
  })
})
