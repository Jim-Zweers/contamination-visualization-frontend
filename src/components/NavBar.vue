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
                <router-link class="nav-item" to="/logout"><vue-feather class="icon" type="log-out" size="35px"></vue-feather></router-link>
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
        background-color: #475841;
        border-radius: 0px 20px 20px 0px;
        padding: 10px;
        z-index: 5;
        transform: translateX(100%);
        transition: transform .2s;
    }

    .nav-item:hover{
        color: #78BC61;
    }

    .nav-box{
        position: relative;
        width: 100%;
    }

    span{
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        transition: transform 2s linear;
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

</style>