<template>
  <article id="slider" class="text-center">
    <img
      :src="currentSlide.img"
      class="pt-6"
    />
    <div id="slider-nav" class="space-x-4 pt-6 px-6">
      <span
        v-for="(item, index) in technologies"
        :key="item"
        :class="['slider-option',{active: currentSlide === item}]"
        @click="currentSlide = item"
      >{{ index + 1 }}</span>
    </div>
    <div id="slider-desc" class="px-6 pt-6">
        <span class="text-xs title">THE TERMINOLOGY</span>
        <h3 class="text-xl uppercase pb-4 pt-1">{{ currentSlide.name }}</h3>
        <p>
            {{ currentSlide.description }}
        </p>
    </div>
  </article>
</template>

<script>
export default {
  props: ["technologies"],
  data() {
    return {
      currentSlide: this.technologies[0],
    };
  },
};
</script>

<style lang="scss" scoped>
.slider-option{
    font-family: "Bellefair";
    @apply  bg-transparent rounded-full text-white;
    border: 0.5px solid #383b4b;
    padding: 8px 14px;
}

.slider-option.active{
    @apply bg-white border-none text-black;
}

h3{
    font-family: "Bellefair";
}

.title{
    letter-spacing: 2.36px;
    color: #D0D6F9;
}

</style>
