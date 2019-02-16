<template>
  <div
    v-html="output"
    class="gwi-markup"/>
</template>

<script>
export default {
  props: ['input'],
  computed: {
    output () {
      return this.enrichMarkup(this.input)
    }
  },
  methods: {
    enrichMarkup (raw) {
      return raw ? raw.replace('<a ', '<a class="bi-text__link" ') : ''
    }
  }
}
</script>

<style lang="scss">
  .gwi-markup {
    margin-bottom: .75em;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
