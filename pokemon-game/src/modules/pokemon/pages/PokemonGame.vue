<template>
  <section
    v-if="isLoading || randomPokemon.id == null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl font-bold mb-3">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemons...</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <PokemonScore 
        @newGame="getNextRound" 
        :currentStatus="gameStatus" 
        :score="score" 
        @resetGame="resetGame"
    />

    <!-- <button
      v-if="gameStatus != GameStatus.Playing"
      @click="getNextRound()"
      class="bg-white shadow-md rounded-lg p-3 m-2 text-center cursor-pointer w-40 hover:bg-gray-100 transition-all capitalize flex items-center justify-center"
    >
      Reiniciar
    </button> -->

    <h1 class="m-5">¿Quién es este pokemon?</h1>
    <!-- Pokemon Picture -->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus != GameStatus.Playing"
    />

    <!-- Pokemon Options -->
    <PokemonOptions
      :options="options"
      @selected-option="checkAnswer"
      :blocked-options="gameStatus != GameStatus.Playing"
      :correct-answer="randomPokemon.id"
    />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonScore from '../components/PokemonScore.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const {
  randomPokemon,
  isLoading,
  gameStatus,
  pokemonsOptions: options,
  checkAnswer,
  getNextRound,
  score,
  resetGame,
} = usePokemonGame();
</script>
