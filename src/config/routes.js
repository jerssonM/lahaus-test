import estatesSerializer from '@/utils/serializers/estates.serializer'

export default {
  getEstates: {
    path: 'real-estates',
    method: 'get',
    serializer: estatesSerializer,
  },
}
