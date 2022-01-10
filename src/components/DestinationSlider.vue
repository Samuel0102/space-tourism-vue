<template>
  <article id="slider">
    <img :src="currentSlide.img" class="w-36 mx-auto pt-7" />

    <div id="slider-navigation" class="py-7 text-white text-xs space-x-5">
      <span
        :class="['slider-option', { active: currentSlide === item }]"
        v-for="item in destinations"
        :key="item"
        @click="currentSlide = item"
        >{{ item.name }}</span
      >
    </div>

    <div id="slide-desc">
      <h2 class="text-5xl uppercase">{{ currentSlide.name }}</h2>
      <p>
        {{ currentSlide.description }}
      </p>
    </div>

    <hr class="my-6" />
    
    <div id="slide-info" class="uppercase">
      <div>
        <span class="title">AVG. Distance</span>
        <span class="info text-2xl">{{ currentSlide.avgDistance }}</span>
      </div>
      <div class="mt-8">
        <span class="title">EST. Travel Time</span>
        <span class="info text-2xl"> {{ currentSlide.travelTime }} </span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["destinations"],
  data() {
    return {
      currentSlide: this.destinations[0],
    };
  },
};
</script>

<style lang="scss" scoped>
h2,
.info {
  font-family: "Bellefair";
}

.title,
.slider-option {
  color: #d0d6f9;
  @apply uppercase;
}

.title {
  @apply block text-xs pb-2;
}

.title,
.slider-option {
  letter-spacing: 2.36px;
}

.slider-option.active:after {
  content: "";
  border: 1px solid white;
  width: 100%;
  left: -1px;
  position: absolute;
  bottom: -9px;
}

.slider-option {
  @apply relative;

  &:hover {
    @apply cursor-pointer;
  }
}

</style>
