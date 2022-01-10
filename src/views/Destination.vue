<template>
  <section id="destination" class="px-6 text-center text-white pb-10">
    <PageTitle
      :title="'Pick your destination'"
      :numeration="'01'"
    />

    <DestinationSlider :destinations="destinations" />
  </section>
</template>

<script>
import DestinationSlider from '../components/DestinationSlider.vue';
import PageTitle from '../components/PageTitle.vue';
export default {
  components: { DestinationSlider, PageTitle },
  data() {
    return {
      destinations: [
        {
          name: "Moon",
          img: require('@/assets/img/destination/image-moon.png'),
          description: ` 
            See our planet as you’ve never seen it before. A perfect
            relaxing trip away to help regain perspective and come
            back refreshed. While you’re there, take in some history by
            visiting the Luna 2 and Apollo 11 landing sites.
          `,
          avgDistance: "384, 400 KM",
          travelTime: "3 Days",
        },
        {
          name: "Mars",
          img: require('@/assets/img/destination/image-mars.png'),
          description: ` 
            Don’t forget to pack your hiking boots. You’ll need them to
            tackle Olympus Mons, the tallest planetary mountain in our
            solar system. It’s two and a half times the size of Everest!
          `,
          avgDistance: "225 MIL KM",
          travelTime: "9 Months",
        },
        {
          name: "Europa",
          img: require('@/assets/img/destination/image-europa.png'),
          description: `
            Don’t forget to pack your hiking boots. You’ll need them to
            tackle Olympus Mons, the tallest planetary mountain in our
            solar system. It’s two and a half times the size of Everest!
          `,
          avgDistance: "628 MIL KM",
          travelTime: "3 Years",
        },
        {
          name: "Titan",
          img: require('@/assets/img/destination/image-titan.png'),
          description: ` 
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          `,
          avgDistance: "1.6 BIL. KM",
          travelTime: "7 Years"
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Barlow Condensed";
}
</style>
