<template>
  <div>
    <h4 class="bi-text__title bi-text__title--4">Kosten</h4>
    <table v-if="costs && costs.length > 0" class="bi-costs">
      <tbody>
        <tr
          class="bi-costs__row"
          v-for="cost in costs"
        >
          <td class="bi-costs__cell bi-costs__description">{{cost.description}}</td>
          <td class="bi-costs__cell bi-costs__amount">{{cost.amount}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: ['costs']
  }
</script>

<style lang="scss">
  @import '../layouts/styles/variables';

  .bi-costs {
    min-width: 100%;
    margin-bottom: .75em;

    @media screen and (max-width: 600px){
      &__row {
        border-bottom: 1px dotted $color__line--table;

        @media screen and (max-width: 600px) {
          display: flex;
          flex-direction: column;
        }
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
      @media screen and (max-width: 600px) {
        text-align: left;
        padding-left: 0;
        font-weight: 600;
      }
    }

  }
</style>
