<template>
  <div v-html="compiled" class="gwi-markup"></div>
</template>

<script>
  import marked from 'marked'
  export default {
    props: ['input'],
    computed: {
      compiled () {
        return marked(this.input)
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
