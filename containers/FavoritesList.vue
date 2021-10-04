<template>
  <div class="md:mt-16 mt-8">
    <h3 class="text-primary md:text-3xl text-xl font-medium text-center mb-12">
      {{ $t('favoritesList') }}
    </h3>
    <div class="md:grid md:grid-cols-3 md:grid-rows-auto gap-y-12 gap-x-8">
      <FavoriteItem
        v-for="list in favoriteList"
        :key="list.id"
        :title="list.name"
        :images="list.images"
        :quantity="list.quantity"
      />
      <NewFavoriteList />
    </div>
  </div>
</template>

<script>
import Api from '@/utils/Api'
import FavoriteItem from '@/components/FavoriteItem.vue'
import NewFavoriteList from '@/components/NewFavoriteList.vue'

const getEstates = async () => {
  const api = Api.getInstance()
  const { data } = await api.getEstates()
  return data
}

export default {
  name: 'FavoritesList',
  components: { FavoriteItem, NewFavoriteList },
  data() {
    return { favoriteList: [] }
  },
  async fetch() {
    this.favoriteList = await getEstates()
  },
}
</script>
