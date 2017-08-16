<template>
  <div class="bi-station">
    <div class="bi-station__date">
      {{station.from.year}} - {{station.to.year}}
    </div>
    <div class="bi-station__content">
      <h4 class="bi-text__title bi-text__title--4">{{station.title}}</h4>
      <p class="bi-station__content--basic bi-text__paragraph">
        <span v-if="station.company">
          Bei
          <a
            v-if="station.company.link"
            class="bi-text__link"
            :href="station.company.link"
            :title="station.company.title"
          >{{station.company.title}}</a>
          <span v-else>{{station.company.title}}</span>
        </span>
        <span v-if="station.location">{{(station.company ? ' in ' : 'In ') + station.location}}</span>
      </p>
      <p class="bi-station__content--description" v-if="station.text">{{station.text}}</p>
    </div>

  </div>
</template>

<script>
  export default {
    props: ['station']
  }
</script>

<style lang="scss">
  @import '../layouts/styles/variables';
  .bi-station {
    display: flex;
    &__date {
      white-space: nowrap;
      padding: 15px 15px 15px 12px;
      writing-mode: sideways-lr;
      width: 50px;
      background: $color__background--dark;
      color: $color__text--reverse;
      text-align: center;
    }
    &__content {
      padding: 15px;
      flex-grow:1;

      &--basic {
        margin-bottom: 10px;
      }
    }
  }
</style>
