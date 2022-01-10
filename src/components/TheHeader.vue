<template>
  <header class="flex justify-between items-center p-6">
    <img src="../assets/img/shared/logo.svg" alt="site-logo" class="w-8" />
    <nav></nav>
    <i
      :class="whichIcon"
      alt="menu-icon"
      class="text-2xl md:hidden"
      @click="$.emit('openMenu')"
    />
  </header>
</template>

<script>
export default {
  props: ["isMobileMenuOpen"],
  computed: {
    whichIcon() {
      return !this.isMobileMenuOpen
        ? "fas fa-bars"
        : "fas fa-times";
    },
  },
};
</script>

<style lang="scss" scoped>
i{
    color: #D0D6F9;
}
</style>
