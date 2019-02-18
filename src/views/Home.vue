<template>
  <div>
    <Title
      :markupLevel="1"
      :stylingLevel="1"
      :centered="true">Bildhauerei Rickenbacher</Title>
    <div class="menu" >
      <a href="/grabmale/ausgefuehrte-arbeiten">Ausgeführte Arbeiten</a>
    </div>
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
  .menu {
    text-align: center;
    margin-bottom: 60px;
  }
</style>
