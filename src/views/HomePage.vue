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

<style>
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

.navbar{
  background-color: white;
  grid-row: 1 / span 2;
  margin: 25px;
}

.model{
  background-color: white;
  padding: 10px;
  margin: 30px;
}

.data{
  background-color: white;
  margin: 30px;
}

.navbar, .model, .data{
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}

.table-scroll{
  height: 300px;
}

</style>