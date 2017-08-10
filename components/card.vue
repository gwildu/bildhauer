<template>
  <div class="bi-card">
    <slot/>
  </div>
</template>

<script></script>

<style lang="scss">
  @import '../layouts/styles/variables';
  .bi-card {
    background: white;
    box-shadow: 2px 4px 7px 1px $color__shadow--main;
    border-radius: $border__radius--main;
    margin: 0 auto 30px auto;
    padding: 15px;
    width: 100%;
  }
</style>
