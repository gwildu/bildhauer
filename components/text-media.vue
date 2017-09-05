<template>
  <div class="gwi-text-media">
    <div :class="'gwi-text-media__text gwi-text-media__text--' + textPosition">
      <slot name="text"/>
    </div>
    <slot name="media" />
  </div>
</template>

<script>
  export default {
    props: ['textPosition']
  }
</script>

<style lang="scss">
  .gwi-text-media {
    display: flex;

    &__text {
      flex-grow: 1;
      &--left {
        margin-right: 30px;
      }
      &--right {
        order: 1;
        margin-left: 30px;
      }
    }
  }
</style>
