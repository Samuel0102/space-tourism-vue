<template>
  <header id="header">
    <img src="../assets/img/shared/logo.svg" alt="site-logo" class="w-8" />
    <nav></nav>
    <i
      :class="whichIcon"
      alt="menu-icon"
      class="text-2xl md:hidden relative"
      @click="$.emit('openMenu')"
    />
  </header>
</template>

<script>
export default {
  props: ["isMobileMenuOpen"],
  computed: {
    whichIcon() {
      return !this.isMobileMenuOpen ? "fas fa-bars" : "fas fa-times";
    },
  },
};
</script>

<style lang="scss" scoped>
i {
  color: #d0d6f9;
}

#header {
  @apply flex justify-between items-center p-6 bg-transparent absolute top-0 w-full z-30;
}
</style>
