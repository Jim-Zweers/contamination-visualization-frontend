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
                    <tr class="item-row" v-for="item in state.items" :key="item.dataKey" for="osm">
                        <td><input type="checkbox" name="osm"></td>
                        <td>{{item.LocationName}}</td>
                        <td>{{item.SwabName}}</td>
                        <td>{{item.Contamination}}</td>
                        <td>{{item.Found}}</td>
                        <td>{{item.MonsterDate}}</td>
                        <td>{{item.AnalysedDate}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>

    import { ref, reactive } from 'vue';
    import axios from 'axios';

 export default{

    setup(){

        const ALL = "http://159.223.225.249:3000/api/contamination/all";


        const state = reactive({
            items: [],
        });

        const getAllContaminations = () => {
            axios.get(ALL).then((response ) => {
                state.items = response.data.data;
            });
        }

        getAllContaminations();



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
        //     { selected: "", locationName: "Bananenki", swabName: '001', contamination: 'Listeria', found: 'yes', swabDate: '9/12/22', analysedDate: '12/12/22'},
        // ])

        console.log(state);


        return{
            headers,
            state,
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