import { mount } from '../testUtils'

import FavoritesList from '@/containers/FavoritesList.vue'

const mock = [
  {
    id: '43148',
    name: 'Mis favoritos',
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
  },
]

describe('FavoritesList', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FavoritesList)
    expect(wrapper.vm).toBeTruthy()
  })
  test('contains title', () => {
    const wrapper = mount(FavoritesList, {
      data() {
        return { favoriteList: mock }
      },
    })
    const title = wrapper.find('h3')
    const favItem = wrapper.findComponent({ name: 'FavoriteItem' })
    expect(title.text()).toContain('favoritesList')
    expect(favItem.exists()).toBe(true)
  })
})
