<template>
  <div>
    <style>
      .gwi-text-media-{{this.id}} {
        background-image: url("{{img}}");
      }
      @media screen and (max-width: 820px) {
        .gwi-text-media-{{this.id}} {
          background-image: url("{{portraitImage}}");
        }
      }
      .gwi-text-media-{{this.id}} .gwi-text-media__text > * {
        background-color: rgba(255, 255, 255, {{elementOpacity}});
      }
    </style>
    <gwi-card
      level="1"
      no-padding="true"
      :class="'gwi-text-media gwi-text-media-' + id"
    >
      <div class="gwi-text-media__text">
        <slot />
      </div>

    </gwi-card>
  </div>
</template>

<script>
  import gwiCard from './card.vue'

  export default {
    components: {
      'gwi-card': gwiCard
    },
    props: {
      img: String,
      hasPortrait: Boolean,
      elementOpacity: {
        type: String,
        default: '.8'
      }
    },
    computed: {
      imgParts () {
        return this.img.split('.')
      },
      id () {
        const pathSegments = this.imgParts[0].split('/')
        console.log(pathSegments)
        return pathSegments[pathSegments.length - 1]
      },
      portraitImage () {
        if (!this.hasPortrait) {
          return this.img
        }
        return `${this.imgParts[0]}_portrait.${this.imgParts[1]}`
      }
    }
  }
</script>

<style lang="scss">
  @import '../layouts/styles/colors';
  @import '../layouts/styles/gwi-mixins';
  .gwi-text-media {
    display: flex;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 820px) {
        }

    &__text {
      padding: 40px;

      @media screen and (max-width: 600px) {
        padding: 20px;
      }

      &>* {
        @include card-frame(5);
        padding: 15px;
        margin-bottom: 1em;
        font-size: 24px;

        &:last-child {
          margin-bottom: 0 !important;
        }
      }
    }
  }
</style>
