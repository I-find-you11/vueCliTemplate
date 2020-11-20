<template>
  <div>
    index
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('increment', 11)
  }
}
</script>

<style scoped lang="scss">

</style>