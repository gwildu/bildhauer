<template>
  <div>
    <h4 class="bi-text__title bi-text__title--4">Kosten</h4>
    <ul class="bi-costs">
      <li
        class="bi-costs__cost-entry"
        v-for="entry in costs"
      >
        <div>{{entry.description}}</div>
        <div v-if="entry.amount">{{formatPrice(entry.amount)}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['costs'],
    methods: {
      formatPrice (unformated) {
        if (typeof unformated === 'string') {
          return unformated
        }
        const formatedNumber = unformated.toFixed(2)
        return `${formatedNumber} CHF`
      }
    }
  }
</script>

<style lang="scss">
  .bi-costs {
    width: 600px;

    &__cost-entry {
      display: flex;
      justify-content: space-between;
      line-height: 1.4;
    }
  }
</style>
