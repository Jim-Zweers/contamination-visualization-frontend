<template lang="">
    <div>
        <nav>
            <div class="nav-box">
                <router-link class="nav-item" to="/"><vue-feather class="icon" type="home" size="35px"></vue-feather></router-link>
                <span>Home</span>
            </div>
            <div class="nav-box">
                <router-link class="nav-item" to="/database"><vue-feather class="icon" type="database" size="35px"></vue-feather></router-link>
                <span>Data</span>
            </div>

            <div class="nav-box">
                <router-link class="nav-item" to="/planning"><vue-feather class="icon" type="calendar" size="35px"></vue-feather></router-link>
                <span>Planning</span>
            </div>
            <div class="nav-box">
                <router-link class="nav-item" to="/account"><vue-feather class="icon" type="user" size="35px"></vue-feather></router-link>
                <span>Account</span>
            </div>
            <div class="nav-box logout">
                <router-link class="nav-item" to=""><vue-feather class="icon" type="log-out" size="35px"></vue-feather></router-link>
                <span>Logout</span>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style scoped>

    .nav-item:hover + span{
        color: #fff;
        display: block;
        position:absolute;
        background-color: green;
        border-radius: 0px 5px 5px 0px;
        padding: 10px;
    }

    .nav-box{
        position: relative;
        width: 100%;
    }

    span{
        position: absolute;
        left: 100%;
        top: 0;
        width: 100%;
        transition: width 2s
    }

    nav{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
    }

    .nav-box > span{
        display: none;
 
    }

    .nav-box{
        margin-top: 30px;
    }

    .logout{
        position: absolute;
        bottom: 50px;
    }

</style>