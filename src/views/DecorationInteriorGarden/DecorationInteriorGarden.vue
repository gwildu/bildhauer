<template>
  <div>
    <Title
      :markupLevel="1"
      :stylingLevel="1"
      :centered="true">Deko / Innen- / Gartengestaltung</Title>
    <UnderConstruction />
  </div>
</template>

<script>
import Title from '@/components/common/Title'
import UnderConstruction from '@/components/common/UnderConstruction'

export default {
  name: 'DecorationInteriorGarden',
  components: { UnderConstruction, Title }
}
</script>

<style scoped>

</style>
