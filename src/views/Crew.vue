<template>
    <section id="crew" class="px-6 pt-24 text-white text-center">
        <PageTitle
            :title="'Meet your crew'"
            :numeration="'02'"
        />

        <CrewSlider :crew="crew" />
    </section> 
</template>

<script>
import CrewSlider from '../components/CrewSlider.vue'
import PageTitle from '../components/PageTitle.vue'

export default {
  components: { PageTitle, CrewSlider },
  data(){
      return {
          crew: [
              {
                  role: "Commander",
                  img: require('@/assets/img/crew/image-douglas-hurley.webp'),
                  name: "Douglas Hurley",
                  description: `
                    Douglas Gerald Hurley is an American engineer,
                    former Marine Corps pilot and former NASA astronaut.
                    He launched into space for the third time as commander
                    of Crew Dragon Demo-2.
                  `,
              },
              {
                  role: "Mission Specialist",
                  img: require('@/assets/img/crew/image-mark-shuttleworth.webp'),
                  name: "Mark Shuttleworth",
                  description: `
                    Mark Richard Shuttleworth is the founder and CEO of Canonical,
                    the company behind the Linux-based Ubuntu operating system.
                    Shuttleworth became the first South African to travel to
                    space as a space tourist.
                  `
              },
              {
                  role: "Pilot",
                  img: require("@/assets/img/crew/image-victor-glover.webp"),
                  name: "Victor Glover",
                  description: `
                    Pilot on the first operational flight of the SpaceX Crew Dragon
                    to the International Space Station. Glover is a commander in
                    the U.S. Navy where he pilots an F/A-18.He was a crew member
                    of Expedition 64, and served as a station systems flight engineer. 
                  `
              },
              {
                  role: "Flight Engineer",
                  img: require('@/assets/img/crew/image-anousheh-ansari.webp'),
                  name: "Anousheh Ansari",
                  description: `
                    Anousheh Ansari is an Iranian American engineer and co-founder
                    of Prodea Systems. Ansari was the fourth self-funded space
                    tourist, the first self-funded woman to fly to the ISS, 
                    and the first Iranian in space. 
                  `
              }
          ]
      }
  }

}
</script>

<style lang="scss" scoped>
section{
  background: url('../assets/img/crew/background-crew-mobile.jpg');
}
</style>