<script setup>
    //import axios from 'axios';
    import {useRoute,useRouter} from 'vue-router';
    //import {ref} from 'vue';
    import {useGetData} from '@/composables/getData';

    const route = useRoute();
    const router = useRouter();
    const {getData, loading, data, error} = useGetData();

    //const poke = ref({});

    const back = () => {
        router.push('/pokemons');
    }

    // const getData = async() => {
    //     try {
    //         const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)        
    //         poke.value = data;
    //     } catch (error) {
    //         console.log(error);
    //         poke.value = null;
    //     }    
    // }
    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
    <p v-if="loading">Cargando información...</p>
    <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
    
    <div v-if="data">
        <img :src="data.sprites?.front_default" width="200" alt="">
        <h1>Poke name: {{$route.params.name }}</h1>
    </div>    
    <button @click="back" class="btn btn-outline-primary">Back</button>
    
</template>