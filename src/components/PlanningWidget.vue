<template lang="">
    <div class="plan">
        <label class="switch">
            <input type="checkbox">
            <span class="slider"></span>
            <span class="selection">Cleaning</span>
            <span class="selection">Swabbing</span>
        </label>
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