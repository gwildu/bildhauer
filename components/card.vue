<template>
  <div
    :class="{'bi-card--no-padding': noPadding, ['bi-card bi-card--' + level]: true}"
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
  @import '../layouts/styles/mixins';
  .bi-card {
    background: white;
    border-radius: $border__radius--main;
    margin: 0 auto 30px auto;
    padding: 15px;
    width: 100%;
    &--no-padding {
      padding: 0;
    }
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &--1 {
      @include elevation(1);
    }
    &--2 {
      @include elevation(2);
    }
    &--3 {
      @include elevation(3);
    }
    &--4 {
      @include elevation(4);
    }
    &--5 {
      @include elevation(5);
    }
  }

</style>
