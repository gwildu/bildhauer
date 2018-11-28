<template>
  <div :id="id">
    <div
      class="gwi-collapsible__header"
      @click="toggle"
    >
      <slot name="header"/>
      <span
        class="gwi-collapsible__toggle bi-text__link"
      >
        <transition name="fade">
          <slot
            v-if="!isVisible"
            name="toggleOn"/>
          <slot
            v-if="isVisible"
            name="toggleOff"/>
        </transition>
      </span>
    </div>
    <transition name="fade">
      <div
        v-if="isVisible"
        class="gwi-collapsible__content">
        <slot name="content"/>
      </div>
    </transition>
  </div>
</template>

<script>
import scrollToElement from 'scroll-to-element'

export default {
  props: ['initialIsVisible', 'bindIsVisible', 'id'],
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
      if (this.internalIsVisible) {
        this.$nextTick(() => {
          scrollToElement(`#${this.id}`, {
            duration: 500
          })
        })
      }
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
    &__toggle {
      font-size: .6em;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
