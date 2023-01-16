<template lang="">
    <div class="plan">
        <label class="switch">
            <input type="checkbox">
            <span class="slider"></span>
            <span class="selection">Cleaning</span>
            <span class="selection">Swabbing</span>
        </label>

        <section class="plan__grid">
            <div class="plan__grid__card">
                <div>
                    <vue-feather type="plus-circle" size="40px"></vue-feather>
                    <h3>Create Planning</h3>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .plan{
        background-color: #fff;
        margin: 20px;
    }

    .plan__grid{
        margin: 20px;
        display: grid; 
        grid-template-columns: 1fr 1fr 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr 1fr; 
        gap: 0px 0px;
        height: 100%;
        width: 100%;
        grid-template-areas: 
            ". . . ."
            ". . . ."
            ". . . ."
            ". . . ."; 

    }

    .plan__grid__card{
        color: #fff;
        position: relative;
        width: 300px;
        height: 200px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        background-color: #78BC61;
    }

    .plan__grid__card > div{
        position: absolute;
        right: 50%;
        top: 50%;
        transform: translate(50%, -50%);
    }

    .switch input{
        position: absolute;
        opacity: 0;
        width: 0px;
        height: 0px;
        z-index: 3;
    }

    .slider{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #D9D9D9;
        border-radius: 20px;
        z-index: 1;
    }

    .slider:before{
        position: absolute;
        content: "";
        height: 32px;
        width: 90px;
        right: 0;
        background-color: #78BC61;
        border-radius: 20px;
        transition: .2s linear;
    }

    .selection{
        z-index: 2;
    }

    .switch{
        position: relative;
        display: flex;
        padding: 5px 10px 5px 10px;
        width: 155px;
        justify-content: space-between;
        user-select: none;
    }

    input:checked + .slider:before{
        transform: translateX(-90px);
    }

</style>