<template>
  <div class="new-fav-list cursor-pointer">
    <div
      class="
        rounded-xl
        mb-5
        h-full
        flex
        items-center
        justify-center
        bg-purple-150
      "
    >
      <img
        class="new-fav-list__cross-icon"
        src="~/assets/img/cross.png"
        alt="cross"
      />
    </div>
    <p class="text-terciary text-center font-medium mb-3">
      {{ $t('createNewList') }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'NewFavoriteList',
}
</script>

<style scoped>
.new-fav-list {
  height: 196px;
}
.new-fav-list__cross-icon {
  height: 38px;
  width: 38px;
}
</style>
