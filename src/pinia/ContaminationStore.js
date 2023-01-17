import { defineStore } from 'pinia';

export const useContaminationStore = defineStore('ContaminationStore', {

    state: () => {

        return {
            id: [],
            dataSet: [],
            selectedDataset: [],
        }
        
    },

    actions: {
        updateId(id){



            for(let i = 0; i < this.id.length; i++){
                // if(this.id[i] === 'banaan'){
                //     // this.id.push(id);
                //     this.id.splice(0);
                // }

                if(this.id[i] === id){
                    this.id = []
                }
            }
            // this.id.shift();
            // this.id = [];
                
            this.id.push(id);

            
            
        },

        updateDataSet(dataSet){
            this.dataSet = dataSet;
        },

        updateSelectedDataset(selectedDataset){
            this.selectedDataset = selectedDataset;
        }

    },

    getters: {
        activeId(){
            return this.id;
        },

        availableSets(){
            return this.dataSet;
        },

        selectedSets(){
            return this.selectedDataset;
        }
    }
})