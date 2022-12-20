<template lang="">
    <div>
        <nav>
            <router-link to="/account"><vue-feather type="user" size="35px"></vue-feather></router-link>
            <router-link to="/database"><vue-feather type="database" size="35px"></vue-feather></router-link>
            <router-link to="/"><vue-feather type="box" size="35px"></vue-feather></router-link>
            <router-link to="/planner"><vue-feather type="calendar" size="35px"></vue-feather></router-link>
            <vue-feather type="log-out" size="35px"></vue-feather>
        </nav>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style scoped>

    router-link:hover{
        background-color: #0fE022;
    }
</style>