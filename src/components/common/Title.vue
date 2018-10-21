<script>
export default {
  name: 'Title',
  render: function (createElement) {
    return createElement(`h${this.markupLevel}`, {
      class: {
        'bi-text__title': true,
        [`bi-text__title--${this.stylingLevel}`]: true,
        'bi-text--centered': this.centered
      }
    }, this.$slots.default)
  },
  props: {
    markupLevel: {
      type: Number,
      default: 3
    },
    stylingLevel: {
      type: Number,
      default: 3
    },
    centered: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
