<template>
  <div class="min-h-screen bg-white">
    <Header />
    <Container>
      <FavoritesList />
    </Container>
  </div>
</template>

<script>
import Api from '@/utils/Api'
import Header from '@/components/Header.vue'
import Container from '@/components/Container.vue'
import FavoritesList from '@/containers/FavoritesList.vue'

export default {
  components: { Header, Container, FavoritesList },
  fetch() {
    Api.getInstance().initApi(this.$config.baseUrl)
  },
}
</script>
