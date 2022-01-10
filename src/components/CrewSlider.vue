<template>
  <article id="slider" class="text-center"> 
      <img :src="currentSlide.img" class="w-7/12 mx-auto pt-6 transform">
      <hr>
      <div id="slider-nav" class="space-x-4 py-7 flex justify-center">
          <span 
            v-for="item in crew"
            :class="['slider-option',{active: currentSlide === item}]"
            :key="item"
            @click="currentSlide = item"
          ></span>
      </div>
      <div id="slider-desc">
          <span class="uppercase opacity-50">{{ currentSlide.role }}</span>
          <h3 class="uppercase pb-4 pt-2 text-xl">{{ currentSlide.name }}</h3>
          <p>
              {{ currentSlide.description }}
          </p>
      </div>
  </article>
</template>

<script>
export default {
    props: ["crew"],
    data(){
        return {
            currentSlide: this.crew[0]
        }
    }
}
</script>

<style lang="scss" scoped>
.slider-option{
    height: 8px;
    width: 8px;
    background-color: white;
    opacity: 30%;
    border-radius: 50%;
    display: inline-block;
}

.slider-option.active{
    @apply opacity-100;
}

h3{
    font-family: "Bellefair";
}

</style>