import { mount } from '../testUtils'

import Home from '@/pages'

describe('Home', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Home)
    expect(wrapper.vm).toBeTruthy()
  })
  test('contains all components', () => {
    const wrapper = mount(Home)
    const header = wrapper.findComponent({ name: 'Header' })
    const container = wrapper.findComponent({ name: 'Container' })
    const favoritesList = wrapper.findComponent({ name: 'FavoritesList' })
    const newFavoriteList = wrapper.findComponent({ name: 'NewFavoriteList' })
    expect(header.exists()).toBe(true)
    expect(container.exists()).toBe(true)
    expect(favoritesList.exists()).toBe(true)
    expect(newFavoriteList.exists()).toBe(true)
  })
})
