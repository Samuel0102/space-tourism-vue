<template>
  <TheHeader
    @openMenu="isMobileMenuOpen = !isMobileMenuOpen"
    :isMobileMenuOpen="isMobileMenuOpen"
  />
  <transition name="fade-right">
    <MobileMenu v-show="isMobileMenuOpen" />
  </transition>
</template>

<script>
import MobileMenu from "./components/MobileMenu.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  components: { TheHeader, MobileMenu },
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap");

#app {
  @apply relative h-screen;
  background: url("assets/img/home/background-home-mobile.jpg");
}
</style>
