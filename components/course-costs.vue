<template>
  <div>
    <h4 class="bi-text__title bi-text__title--4">Kosten</h4>
    <table class="bi-costs">
      <tr
        class="bi-costs__row"
        v-for="entry in costs"
      >
        <td class="bi-costs__cell bi-costs__description">{{entry.description}}</td>
        <td class="bi-costs__cell bi-costs__amount">{{formatPrice(entry.amount)}}</td>
      </tr>
    </table>
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
  @import '../layouts/styles/variables';
  .bi-costs {
    max-width: 600px;

    @media screen and (max-width: 600px){
      &__row {
        border-bottom: 1px dotted $color__line--table;
        &:last-of-type {
          border-color: transparent;
        }
      }

    }

    &__cell {
      padding: 8px 0;
    }

    &__amount {
      white-space: nowrap;
      text-align: right;
      padding-left: 20px;
    }

  }
</style>
