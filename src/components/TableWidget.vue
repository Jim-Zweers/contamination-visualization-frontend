<template lang="">
    <table>
        <tr class="header-row">
            <th v-for="header in headers" :key="header.dataKey">
                {{ header.text }}
            </th>
        </tr>
        <tr class="item-row" v-for="item in items" :key="item.dataKey" for="osm">
            <td><input type="checkbox" name="osm"></td>
            <td>{{item.locationName}}</td>
            <td>{{item.swabName}}</td>
            <td>{{item.contamination}}</td>
            <td>{{item.found}}</td>
            <td>{{item.swabDate}}</td>
            <td>{{item.analysedDate}}</td>
        </tr>

    </table>

</template>
<script>

    import { ref } from 'vue'

 export default{
    
    setup(){
        
        const headers = ref([
            { text: "Selected" , value: "selected"},
            { text: "Location Name", value: "locationName"},
            { text: "Swab Name", value: "swabName" },
            { text: "Contamination", value: "contamination" },
            { text: "Found", value: "found" },
            { text: "Swab Date", value: "swabDate" },
            { text: "Analysed Date", value: "analysedDate" },
        ])

        const items = ref([
            { selected: "", locationName: "Ruimtenummer 3, punt 20", swabName: '001', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
            { selected: "", locationName: "Ruimtenummer 3, punt 21", swabName: '002', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
            { selected: "", locationName: "Ruimtenummer 3, punt 22", swabName: '003', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
            { selected: "", locationName: "Ruimtenummer 3, punt 23", swabName: '004', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
            { selected: "", locationName: "Ruimtenummer 3, punt 24", swabName: '005', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
            { selected: "", locationName: "Ruimtenummer 4, punt 25", swabName: '006', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
            { selected: "", locationName: "Ruimtenummer 4, punt 26", swabName: '007', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
            { selected: "", locationName: "Ruimtenummer 4, punt 27", swabName: '008', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
        ])

        console.log(headers.value.text);

        return{
            headers,
            items,
        }

    }
 }
</script>
<style scoped>

    table{
        width: 100%;
    }

    .header-row{
        border: 5px 5px 0px 0px;
        background-color: #78BC61;
    }

    th{
        padding: 10px;
        color: #fff;
    }

    td{
        padding: 10px;
        border-bottom: .5px solid rgba(0, 0, 0, .1);
    }

    .item-row:hover{
        background-color: rgba(120, 188, 97, 0.3);
    }
</style>