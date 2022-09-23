import { defineStore } from 'pinia';
import {ref,computed} from 'vue';


export const useCounterStore = defineStore('counter', () => {
    
    //state
    const count = ref(0);
    
    //actions
    const increment = () => count.value ++

    //getters
    const double = computed(() => count.value * 2);
    
    return{
        count,
        increment,
        double
    }
});


// export const useCounterStore = defineStore('counter',{

//     state: () => ({
//         count: 0,        
//     }),
//     actions: {
//         increment(){
//             this.count ++
//         }
//     },
//     getters: {
//         double: (state) => state.count * 2
//     }
    
// });