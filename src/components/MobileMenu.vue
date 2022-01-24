<template>
  <div id="mobile-menu" class="absolute z-10 top-0 right-0 w-9/12 h-full">
    <nav class="mt-20 mx-8">
      <ul>
        <li>
          <router-link to="/">
            <strong>00</strong><span> HOME</span>
          </router-link>
        </li>
        <li>
          <router-link to="/destination">
            <strong>01</strong><span>  DESTINATION</span>
          </router-link>
        </li>
        <li>
          <router-link to="/crew">
            <strong>02</strong><span>  CREW</span>
          </router-link>
        </li>
        <li>
          <router-link to="/technology">
            <strong>03</strong><span>  TECHNOLOGY</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#mobile-menu {
  background: rgba(255, 255, 255, 4%);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

ul li {
  @apply text-base py-2 text-white;
  font-family: "Barlow Condensed";
  letter-spacing: 4px;

  strong {
    @apply font-bold;
  }

  span {
    @apply font-medium;
  }
}

.fade-right-enter-active {
  animation: slide 1s;
}

.fade-right-leave-active {
  animation: slide 1s reverse;
}

@keyframes slide {
  from{
    @apply opacity-0;
  }
  to{
    @apply opacity-100;
  }
}

</style>
