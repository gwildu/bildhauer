<template>
  <h3>Kursdaten</h3>
  <ul>
    <li v-for="date in dates">{{date}}</li>
  </ul>

</template>

<script>
  export default {
    props: ['dates']
  }
</script>

<style lang="scss">

</style>
