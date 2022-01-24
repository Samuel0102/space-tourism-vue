<template>
  <section id="home" class="px-6 pt-24 text-center">
    <div id="text-content" class="text-white">
      <span class="uppercase text-xs">So, you want to travel to</span>
      <h1 class="text-7xl pt-5 pb-8">SPACE</h1>
      <p class="leading-6 text-sm">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>

    <div id="home-button" class="mt-14 w-32 py-12 rounded-full text-center bg-white mx-auto">
      <h3 id="btn-text">EXPLORE</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>

section{
  background: url('../assets/img/home/background-home-mobile.jpg');
}

h1, #btn-text{
  font-family: 'Bellefair';
}

span{
  font-family: 'Barlow';
  color: #D0D6F9;
  letter-spacing: 2.7px;
}

#btn-text{
  color: #0B0D17;
  letter-spacing: 1.25px;
}

</style>
