<template>
  <div
    :class="{'gwi-card--no-padding': noPadding, ['gwi-card gwi-card--' + level]: true}"
  >
    <slot/>
  </div>
</template>

<script>
  export default {
    props: ['noPadding', 'level']
  }
</script>

<style lang="scss">
  @import '../layouts/styles/variables';
  @import '../layouts/styles/gwi-mixins';
  .gwi-card {
    background-color: white;
    margin: 0 auto 30px auto;
    padding: 30px;
    width: 100%;
    /*overflow: hidden;*/
    @media screen and (max-width: 600px){
      padding: 5px;
    }
    &--no-padding {
      padding: 0;
    }
    &--1 {
      @include card-frame(1);
    }
    &--2 {
      @include card-frame(2);
    }
    &--3 {
      @include card-frame(3);
    }
    &--4 {
      @include card-frame(4);
    }
    &--5 {
      @include card-frame(5);
    }
  }

</style>
