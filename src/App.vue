<template>
  <TheHeader
    @openMenu="isMobileMenuOpen = !isMobileMenuOpen"
    :isMobileMenuOpen="isMobileMenuOpen"
  />
  <transition name="fade-right">
    <MobileMenu v-show="isMobileMenuOpen" />
  </transition>

  <router-view></router-view>
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
@import url('https://fonts.googleapis.com/css2?family=Bellefair&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');

#app {
  @apply relative;
  background: url('assets/img/crew/background-crew-mobile.jpg');
  background-size: cover;
  font-family: 'Barlow Condensed';
}

p{
  @apply leading-6 text-sm;
  font-family: 'Barlow';
  color: #D0D6F9;
}

hr {
  border: 0.1px solid #383b4b;
}
</style>
