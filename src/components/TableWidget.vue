<template lang="">
    <div class="table-wrapper">
        
                <table class="header-table">
                    <thead>
                        <tr class="header-row">
                            <th v-for="header in headers" :key="header.dataKey">
                                <span class="header-text"> {{ header.text }} </span>
                            </th>
                        </tr>
                    </thead>
                </table>
        <div class="table-scroll">
                <table class="body-table">
                    <tbody>
                        <tr class="item-row" v-for="item in state.items" :key="item.dataKey" for="osm">
                            <td><input ref="check" id="check" type="checkbox" name="osm" value="{{item.id}}"></td>
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

    import { ref, reactive, onMounted } from 'vue';
    import axios from 'axios';

 export default{

    

    setup(){

        const ALL = "http://159.223.225.249:3000/api/contamination/all";
        const check = ref(null);
        const state = reactive({
            items: [],
        });

        const getAllContaminations = () => {
            axios.get(ALL).then((response ) => {
                state.items = response.data.data;
            });
        }

        onMounted(() => {
            check;
            // console.log(check);
        }),

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

        // console.log(state);

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

    .header-table{
        border-collapse: collapse;
        border-radius: 5px 5px 0px 0px;
        overflow: hidden;
        color: #fff;
    }

    .body-table{
        border-collapse: collapse;
    }

    td{
        padding: 10px;
        border-bottom: .5px solid rgba(0, 0, 0, .1);
    }

    th{
        padding: 10px;
        background-color: #78BC61;

    }

    .item-row:hover{
        background-color: rgba(120, 188, 98, 0.302);
    }

    .table-scroll{
        height: 250px;
    }
</style>