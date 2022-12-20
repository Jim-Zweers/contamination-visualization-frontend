<template lang="">
    <table>
        <tr>
            <th v-for="header in headers" :key="header.dataKey">
                {{ header.text }}
            </th>
        
        </tr>

        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
</template>
<script>

import { ref } from "vue";

 export default{

    setup(){
        
        const headers = ref([
            { text: "Selected" , value: "selected"},
            { text: "Location Name", value: "locationName"},
            { text: "Swab Name", value: "swabName" },
            { text: "Contamination", value: "contamination" },
            { text: "Found", value: "found" },
            { text: "Swab Date", value: "swabDate" },
            { text: "Analysed Data", value: "analysedData" },
        ])

        console.log(headers.value.text);

        return{
            headers,
        }

    }
 }
</script>
<style scoped>
    th{
        margin: 5px;
    }
</style>