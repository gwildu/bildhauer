<template>
  <div>
    <Title
      :markupLevel="1"
      :stylingLevel="1"
      :centered="true">Bildhauerei Rickenbacher</Title>
    <UnderConstruction />
  </div>
</template>

<script>
import Title from '@/components/common/Title'
import UnderConstruction from '@/components/common/UnderConstruction'

export default {
  name: 'Home',
  components: { Title, UnderConstruction }
}
</script>

<style scoped>

</style>
