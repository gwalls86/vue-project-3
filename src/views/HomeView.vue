<script setup>
  import {useCounterStore} from '@/store/counter.js'
  import { storeToRefs } from 'pinia';

  const useCounter = useCounterStore();  
  const {increment} =useCounter;
  //Aplica para State (referencia) y Getters (propiedades computadas)
  //La destructuración de referencias y propiedads conmutadas se deben
  //realizar con StoreToRefs.
  const {count, double} = storeToRefs(useCounter)

</script>

<template>
  <main>
    <h1>Home counter: {{count}}</h1>
    <h2>Double: {{double}}</h2>
    <button @click="increment">Increment</button>
  </main>
</template>
