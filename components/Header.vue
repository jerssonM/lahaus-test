<template>
  <nav
    class="
      flex flex-row
      border-b border-gray-80
      md:pr-16 md:pl-16
      content-center
      md:justify-between
      pl-5
      pt-3.5
      pb-3.5
    "
  >
    <div class="flex flex-col justify-center mr-3 md:hidden">
      <div class="header-menu__lines bg-gray-650 relative mb-2" />
      <div class="header-menu__lines bg-gray-650 mb-2" />
      <div class="header-menu__lines bg-gray-650" />
    </div>
    <img
      src="~/assets/img/logo-mobile.png"
      alt="logo"
      title="lahaus"
      class="header-logo md:hidden cursor-pointer"
    />
    <img
      src="~/assets/img/logo-desktop.png"
      alt="logo"
      title="lahaus"
      class="header-logo hidden md:block cursor-pointer"
    />
    <ul class="hidden md:flex">
      <li class="mr-12 cursor-pointer text-primary">
        {{ $t('navbar.cundinamarca') }}
      </li>
      <li class="mr-12 cursor-pointer text-primary">
        {{ $t('navbar.antioquia') }}
      </li>
      <li class="mr-12 cursor-pointer text-primary">
        {{ $t('navbar.resources') }}
      </li>
      <li class="flex flex-row items-center font-medium cursor-pointer">
        <span class="mr-2 text-primary">
          {{ $t('navbar.profile') }}
        </span>
        <div class="header-menu__arrow-down relative">
          <img src="~/assets/img/arrow-down.png" alt="arrow-down" />
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header-menu__lines {
  height: 2px;
  width: 28px;
}
.header-menu__lines:nth-child(1)::after {
  content: '';
  position: absolute;
  top: -8px;
  right: -5px;
  height: 12px;
  width: 12px;
  border-radius: var(--border-full);
  background-color: var(--green-350);
}
.header-menu__lines:nth-child(3) {
  width: 20px;
}
.header-menu__arrow-down {
  height: 8px;
  width: 14px;
}
.header-menu__arrow-down::after {
  content: '';
  position: absolute;
  height: 12px;
  width: 12px;
  top: -12px;
  right: -8px;
  border-radius: var(--border-full);
  background-color: var(--green-350);
}
.header-logo {
  height: 32px;
}
@media (min-width: 1024px) {
  .header-logo {
    height: 24px;
  }
}
</style>
