<template>
  <h2 id="page-title" class="text-sm uppercase">
     <span class="opacity-40">{{ numeration }}</span>  {{ title }}
  </h2>
</template>

<script>
export default {
    props: ["title", "numeration"]
}
</script>

<style lang="scss" scoped>
#page-title, span {
  letter-spacing: 2.7px;
}
</style>