import { mount } from '../testUtils'
import FavoriteItem from '@/components/FavoriteItem.vue'

const mock = {
  title: 'Mis favoritos',
  quantity: 2,
  images: [
    {
      id: 195748,
      alt: 'apartamento-en-venta-santa-paula-195748',
      title: 'Apartamento en venta en Santa Paula con Bbq...',
      url: 'https://lh-sobreplanos-staging.imgix.net/uploads/real_estate_attachment/picture/4275620/uba_120_apartamentos_en_venta_en_santa_barbara_oriental_con_20m_gallery_0df5de59994bbcf41714.jpg',
    },
    {
      id: 196996,
      alt: 'venta-apartamento-puente-largo-196996',
      title: 'Venta - Apartamento - Puente Largo',
      url: 'https://lh-sobreplanos-staging.imgix.net/uploads/real_estate_attachment/picture/1451171/hacienda_niquia_apartamentos_en_venta_de_2_3_hab_gallery_e4dd46fae78e09fb034c.jpg',
    },
  ],
}

describe('FavoriteItem', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FavoriteItem, { propsData: mock })
    expect(wrapper.vm).toBeTruthy()
  })
  test('contains title and images', () => {
    const wrapper = mount(FavoriteItem, { propsData: mock })
    const titleParagraph = wrapper.find('p')
    const images = wrapper.findAll('img')
    expect(titleParagraph.text()).toContain('Mis favoritos')
    expect(images.length).toBe(2)
  })
  test('call on click event', () => {
    const spy = jest.fn()
    const wrapper = mount(FavoriteItem, {
      propsData: { ...mock, onClick: spy },
    })
    wrapper.find('div').trigger('click')
    expect(spy).toHaveBeenCalled()
  })
})
