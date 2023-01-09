<template lang="">
    <div>
        <nav>
            <router-link class="nav-item" to="/account"><vue-feather type="user" size="35px"></vue-feather><span>Account</span></router-link>
            <router-link class="nav-item" to="/database"><vue-feather type="database" size="35px"></vue-feather><span>Data</span></router-link>
            <router-link class="nav-item" to="/"><vue-feather type="box" size="35px"></vue-feather><span>Home</span></router-link>
            <router-link class="nav-item" to="/planning"><vue-feather type="calendar" size="35px"></vue-feather><span>Planning</span></router-link>
            <router-link class="nav-item logout" to=""><vue-feather type="log-out" size="35px"></vue-feather><span>Logout</span></router-link>
        </nav>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style scoped>

    .nav-item:hover > span{
        color: #fff;
        display: block;
        position:absolute;
        background-color: green;
        border-radius: 0px 5px 5px 0px;
        padding: 10px;
    }

    nav{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
    }

    .nav-item > span{
        display: none;
    }

    .nav-item{
        margin-top: 30px;
    }

    .logout{
        position: absolute;
        bottom: 50px;
    }

</style>