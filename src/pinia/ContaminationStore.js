import { defineStore } from 'pinia';

export const useContaminationStore = defineStore('ContaminationStore', {

    state: () => {

        return {
            id: 0,
        }
        
    },

    actions: {
        update(id){
            this.id = id;
            console.log(this.id);
        }
    }

    //getters
})