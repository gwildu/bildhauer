<template>
  <div>
    <Title
      :markupLevel="1"
      :stylingLevel="1"
      :centered="true">Ausgeführte Arbeiten</Title>
    <div class="container">
      <GwiGallery
        :images="images"
        :options="options"
        :gallery-width="1020"
        :number-of-thumbs-per-row="4"
      />
    </div>
  </div>
</template>

<script>
import Title from '@/components/common/Title'
import UnderConstruction from '@/components/common/UnderConstruction'
import GwiGallery from 'gwi-vue-components/GwiGallery'
import {images} from './references/images'

export default {
  name: 'References',
  components: { UnderConstruction, Title, GwiGallery },
  data () {
    return {
      images,
      options: {
        shareEl: false,
        shareButtons: []
      }
    }
  }
}
</script>

<style scoped>
  .container {
    max-width: 1020px;
    margin: 0 auto;
  }
</style>
