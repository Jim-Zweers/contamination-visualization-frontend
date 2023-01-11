<template lang="">
    <div class="container">
        <div class="navbar">
            <NavBarVue></NavBarVue>
        </div>

        <div class="data">
            <TableWidgetVue></TableWidgetVue>
        </div>
        
    </div>
</template>
<script>

import NavBarVue from '@/components/NavBar.vue';
import TableWidgetVue from '@/components/TableWidget.vue';

export default {
    components:{
        NavBarVue,
        TableWidgetVue,
 },
    
}
</script>
<style scoped>
    .container{
        display: grid; 
        grid-template-rows: 1fr 6fr; 
        gap: 0px 0px; 
        grid-template-areas: 
    ". ."
    ". ."; 
    }

    .data{
        
    }
</style>