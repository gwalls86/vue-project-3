<script setup>
    //import axios from 'axios';
    //import {ref} from 'vue';
    import {useRoute,useRouter} from 'vue-router';    
    import {useGetData} from '@/composables/getData';
    import {useFavoritosStore} from "@/store/favoritos";

    const route = useRoute();
    const router = useRouter();
    const useFavoritos = useFavoritosStore();

    const {getData, loading, data, error} = useGetData();
    const {add,findPoke} = useFavoritos;

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
        <button @click="add(data)" class="btn btn-outline-primary mb-2" :disabled="findPoke(data.name)">
            Agregar Favoritos
        </button>
    </div>    
    <button @click="back" class="btn btn-outline-primary">Back</button>
    
</template>