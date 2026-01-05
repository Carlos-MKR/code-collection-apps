<template>
    <section>
        <img 
        v-if="!showPokemon"
        :src="pokemonImage"
        alt=""
        class="brightness-0 h-50">

        <img 
        v-else
        :src="pokemonImage"
        alt=""
        class="fade-in h-50">
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

    interface Props {
        pokemonId: number;
        showPokemon?: boolean;
    }

    const props = withDefaults( defineProps<Props>(), 
        { 
            showPokemon: false 
        } 
    );

    const pokemonImage = computed( () => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ props.pokemonId }.png`;
    } );

</script>

<style scoped>
img {
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
}
</style>