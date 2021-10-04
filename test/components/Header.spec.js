import { mount } from '../testUtils'
import Header from '@/components/Header.vue'

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header)
    expect(wrapper.vm).toBeTruthy()
  })
  test('contains navbar elements', () => {
    const wrapper = mount(Header)
    const navbarElements = wrapper.find('li')
    expect(navbarElements.text()).toContain('navbar.cundinamarca')
  })
})
