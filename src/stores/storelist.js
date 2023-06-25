import { defineStore } from 'pinia';

export const useListStore = defineStore('storelist', {
  state : () => ({ storelist:[] }),
  actions : {
    updateList(){
        this.storelist.push(param);
    }
  },
  getters: {
    getAllList(state){
      return state.storelist;
    }
  },
})