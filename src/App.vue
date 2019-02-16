<template>
  <div
    id="app"
    class="bi-page">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import 'styles/reset.css';
  @import 'styles/variables';
  @import 'styles/global';

  .bi-page {
    max-width: 1020px;
    margin: 0 auto;
    padding: 30px;
    @media screen and (max-width: 600px) {
      padding: 5px;
    }
  }
</style>
