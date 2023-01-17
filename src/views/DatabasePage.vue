<template lang="">
    <div class="container">
        <div class="navbar">
            <NavBarVue></NavBarVue>
        </div>

        <div class="data">
            <DataWidgetVue></DataWidgetVue>
        </div>
        
    </div>
</template>
<script>

import NavBarVue from '@/components/NavBar.vue';
import DataWidgetVue from '@/components/DataWidget.vue';

export default {
    components:{
        NavBarVue,
        DataWidgetVue,
 },
    
}
</script>
<style scoped>
    .container{
        display: grid;
        width: 100%;
        height: 100vh;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 12fr;
        gap: 0px 0px; 
        grid-template-areas: 
    ". ."
    ". ."; 
    }

    .table-scroll{
        height: 400px;
    }

</style>