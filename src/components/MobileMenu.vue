<template>
    <div id="mobile-menu" class="absolute right-0 w-9/12 h-screen">
        <nav class="m-8">
            <ul>
                <li><strong>00</strong><span> HOME</span></li>
                <li><strong>01</strong><span> DESTINATION</span></li>
                <li><strong>02</strong><span> CREW</span></li>
                <li><strong>03</strong><span> TECHNOLOGY</span></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#mobile-menu{
    font-family: 'Barlow Condensed';
    background: rgba( 255, 255, 255, 4% );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7.5px );
    -webkit-backdrop-filter: blur( 7.5px );
}

ul li{
    @apply text-base py-2 text-white;
    letter-spacing: 4px;

    strong{
        @apply font-bold
    }

    span{
        @apply font-medium
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