<script setup>    
    import {ref} from 'vue';
    import {RouterLink} from 'vue-router'
    import {useGetData} from '@/composables/getData'
    
    const pokemons = ref([]);

    const {getData,data, loading, error} = useGetData();
    // const getData = async() => {
    //     try {
    //         const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon');            
    //         pokemons.value = data.results;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
    <h1>Pokemons</h1>
    <p v-if="loading">Cargando información</p>
    <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <div v-if="data">
        <ul class="list-group">
            <li class="list-group-item" v-for="poke in data.results">
                <router-link :to="`/pokemons/${poke.name}`">{{poke.name }}</router-link>            
            </li>            
        </ul>
        <div class="mt-3">
            <button :disabled="!data.previous" class="button btn btn-success me-2" @click="getData(data.previous)">Previous</button>
            <button :disabled="!data.next" class="button btn btn-primary" @click="getData(data.next)">Next</button>
        </diV>
    </div>
</template>