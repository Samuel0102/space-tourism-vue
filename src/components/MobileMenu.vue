<template>
  <div id="mobile-menu" class="absolute z-10 top-0 right-0 w-9/12 h-full">
    <nav class="mt-20 mx-8">
      <ul>
        <li>
          <router-link to="/">
            <strong>0</strong><span> HOME</span>
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
        <li><strong>03</strong><span> TECHNOLOGY</span></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#mobile-menu {
  font-family: "Barlow Condensed";
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

.fade-right-enter-active {
  transition: all 0.3s ease-out;
}

.fade-right-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-right-enter-from,
.fade-right-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
