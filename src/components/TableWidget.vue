<template lang="">
    <div class="table-wrapper">
        <div class="table-scroll">
            <table>
                <thead>
                    <tr class="header-row">
                        <th v-for="header in headers" :key="header.dataKey">
                            <span class="header-text"> {{ header.text }} </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="item-row" v-for="item in items" :key="item.dataKey" for="osm">
                        <td><input type="checkbox" name="osm"></td>
                        <td>{{item.locationName}}</td>
                        <td>{{item.swabName}}</td>
                        <td>{{item.contamination}}</td>
                        <td>{{item.found}}</td>
                        <td>{{item.swabDate}}</td>
                        <td>{{item.analysedDate}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>

    import { ref } from 'vue';
    import axios from 'axios';

 export default{

    setup(){

        const ALL = "http://159.223.225.249:3000/api/contamination/all";

        let contaminations;

        let items;

        axios.get(ALL).then((response ) => {
            contaminations = response.data;
            console.log(contaminations.data.length);
            for(let i = 0; i < contaminations.data.length; i++){
                console.log(contaminations.data[i].LocationName);

                items = ref([
                    {selected: "", locationName: `${contaminations.data[i].LocationName}`}
                ])
            }
        })

        
        const headers = ref([
            { text: "Selected" , value: "selected"},
            { text: "Location Name", value: "locationName"},
            { text: "Swab Name", value: "swabName" },
            { text: "Contamination", value: "contamination" },
            { text: "Found", value: "found" },
            { text: "Swab Date", value: "swabDate" },
            { text: "Analysed Date", value: "analysedDate" },
        ])

        // const items = ref([
        //     { selected: "", locationName: "Ruimtenummer 3, punt 20", swabName: '001', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
        //     { selected: "", locationName: "Ruimtenummer 3, punt 21", swabName: '002', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
        //     { selected: "", locationName: "Ruimtenummer 3, punt 22", swabName: '003', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
        //     { selected: "", locationName: "Ruimtenummer 3, punt 23", swabName: '004', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
        //     { selected: "", locationName: "Ruimtenummer 3, punt 24", swabName: '005', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
        //     { selected: "", locationName: "Ruimtenummer 4, punt 25", swabName: '006', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
        //     { selected: "", locationName: "Ruimtenummer 4, punt 26", swabName: '007', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
        //     { selected: "", locationName: "Ruimtenummer 4, punt 27", swabName: '008', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
        //     { selected: "", locationName: "Ruimtenummer 4, punt 27", swabName: '008', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
        //     { selected: "", locationName: "Ruimtenummer 4, punt 27", swabName: '008', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
        //     { selected: "", locationName: "Ruimtenummer 4, punt 27", swabName: '008', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},

        // ])


        return{
            headers,
            items,
        }

    }
 }
</script>
<style scoped>

    .table-wrapper{
        position:relative;
    }

    .table-wrapper table{
        width: 100%;
    }

    .table-scroll{
        height: 300px;
        overflow:auto;
        margin-top: 20px;
    }


    td{
        padding: 10px;
        border-bottom: .5px solid rgba(0, 0, 0, .1);
    }

    .item-row:hover{
        background-color: rgba(120, 188, 97, 0.3);
    }
</style>