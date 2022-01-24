<template>
  <div id="mobile-menu" class="absolute right-0 z-20 w-9/12 h-full">
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
  letter-spacing: 4px;

  strong {
    @apply font-bold;
  }

  span {
    @apply font-medium;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
