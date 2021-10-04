<template>
  <div class="md:mb-0 mb-12 cursor-pointer" @click="onClick">
    <div class="fav-list__card rounded-xl mb-5 grid grid-cols-8 grid-rows-1">
      <div
        v-for="(image, index) in images"
        :key="image.id"
        class="
          fav-list__card-img-container
          border border-white
          rounded-xl
          row-start-1
        "
        :class="getImageContainerStyles(index)"
      >
        <img
          class="rounded-xl h-full w-full object-cover"
          :src="image.url"
          :alt="image.alt"
          :title="image.title"
        />
        <span
          v-if="quantity > 2 && index === 2"
          class="
            fav-list__card-counter
            absolute
            text-white
            font-medium
            z-10
            object-center
          "
          >+{{ quantity - 2 }}</span
        >
      </div>
    </div>
    <p id="title" class="text-primary font-medium truncate">{{ title }}</p>
    <p class="text-secondary">
      {{ `${quantity} ${$t('savedProperties')}` }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FavoriteItem',
  props: {
    images: { type: Array, default: () => [] },
    quantity: { type: Number, default: 0 },
    title: { type: String, default: '' },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    getImageContainerStyles(index) {
      let styles = ''
      if (this.quantity === 1) {
        styles += 'col-span-8'
      } else if (this.quantity === 2) {
        const classes = ['col-start-1 col-end-5', 'col-start-4 col-end-9']
        styles += classes[index]
      } else {
        const classes = [
          'col-start-1 col-end-5',
          'col-start-2 col-end-7',
          'col-start-4 col-end-9',
        ]
        styles += classes[index]
      }

      return `${styles} z-${20 - index * 10} ${index === 2 ? 'relative' : ''}`
    },
  },
}
</script>

<style scoped>
.fav-list__card {
  height: 196px;
}
.fav-list__card-img-container:nth-child(3)::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--green-850);
  opacity: var(--opacity-70);
  border-radius: var(--border-xl);
}
.fav-list__card-counter {
  top: 50%;
  left: 80%;
  transform: translate(-75%, -50%);
}
</style>
