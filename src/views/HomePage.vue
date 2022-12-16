<template>
  <div class="container">
    <div class="navbar">
      <NavBarVue></NavBarVue>
    </div> 
    <div class="model"> hallo
      <ThreeCanvasVue></ThreeCanvasVue>
    </div>
    <div class="data">
      hallo
    </div>
  </div>  
</template>

<script>

import ThreeCanvasVue from '@/components/ThreeCanvas.vue';
import NavBarVue from '@/components/NavBar.vue';

export default {
 components:{
  ThreeCanvasVue,
  NavBarVue,
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
  display: flex;
  margin: 30px;
}

.model{
  background-color: white;
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



</style>