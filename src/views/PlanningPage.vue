<template lang="">
    <div class="container">
        <div class="navbar">
            <NavBarVue></NavBarVue>
        </div>

        <div class="planning">
            <PlanningWidgetVue></PlanningWidgetVue>
        </div>
    </div>
</template>
<script>

import NavBarVue from '@/components/NavBar.vue';
import PlanningWidgetVue from '@/components/PlanningWidget.vue';

export default {

    components:{
        NavBarVue,
        PlanningWidgetVue,
    },

}
</script>
<style scoped>
    .container{
        grid-template-rows: 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
        ". .";
    }

    .planning{
        background-color: #fff;
        margin: 25px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;

    }
</style>