<template>
  <div class="container">
    <div class="navbar">
      <NavBarVue></NavBarVue>
    </div> 
    <div class="model">
      <ThreeCanvasVue></ThreeCanvasVue>
    </div>
    <div class="data">
      <TableWidgetVue></TableWidgetVue>
    </div>
  </div>  
</template>

<script>

import ThreeCanvasVue from '@/components/ThreeCanvas.vue';
import NavBarVue from '@/components/NavBar.vue';
import TableWidgetVue from '@/components/TableWidget.vue';

export default {
 components:{
  ThreeCanvasVue,
  NavBarVue,
  TableWidgetVue,
 },
}
</script>

<style scoped>
 .container {
  height: 100vh;
  width: 100%;
  display: grid; 
  grid-template-columns: 1fr 12fr; 
  grid-template-rows: 3fr 2fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    ". ."
    ". ."; 
}

</style>