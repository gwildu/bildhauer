<template>
  <div>
    <div
      class="gwi-collapsible__header"
      @click="toggle"
    >
      <slot name="header"></slot>
      <span
        class="bi-text__link"
      >
        <slot
          v-if="!isVisible"
          name="toggleOn"></slot>
        <slot
          v-if="isVisible"
          name="toggleOff"></slot>
      </span>
    </div>
    <div v-if="isVisible" class="gwi-collapsible__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['initialIsVisible', 'bindIsVisible'],
    data () {
      return {
        internalIsVisible: this.initialIsVisible
      }
    },
    computed: {
      isVisible () {
        return (typeof this.bindIsVisible !== 'undefined' ? this.bindIsVisible : this.internalIsVisible)
      }
    },
    methods: {
      toggle () {
        this.internalIsVisible = !this.internalIsVisible
      }
    }
  }
</script>

<style lang="scss">
  .gwi-collapsible {
    &__header {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
