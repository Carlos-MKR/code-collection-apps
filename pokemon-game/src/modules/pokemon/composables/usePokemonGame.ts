import { computed, onMounted, ref } from "vue";
import { GameStatus, type Pokemon, type PokemonListResponse } from "../interfaces";
import pokemonApi from "../api/pokemonApi";
import confetti from "canvas-confetti";


export const usePokemonGame = () => {

    const gameStatus = ref<GameStatus>(GameStatus.Playing);
    const score = ref(0); 
    const pokemons = ref<Pokemon[]>([]);
    const pokemonsOptions = ref<Pokemon[]>([]);
    const isLoading = computed( () => pokemons.value.length === 0 );
    const randomPokemon = computed( () => {
        const randIndex = Math.floor( Math.random() * pokemonsOptions.value.length );
        return pokemonsOptions.value[randIndex]?? { id: 0, name: '' };
    });

    const getPokemons = async (): Promise<Pokemon[]> => {
        const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');

        const pokemonsArray = response.data.results.map( (pokemon) => {
            const urlParts = pokemon.url.split('/');
            const id = urlParts.at(-2) ?? 0;
            return {
                name: pokemon.name,
                id: Number(id)
            }
        });

        return pokemonsArray.sort( () => Math.random() - 0.5 );

    }

    const getNextRound = (howMany: number = 4) => {
        gameStatus.value = GameStatus.Playing;
        pokemonsOptions.value = pokemons.value.slice(0, howMany);
        pokemons.value = pokemons.value.slice(howMany);
    }

    const resetGame = async () => {
        score.value = 0;
        gameStatus.value = GameStatus.Playing;
        pokemons.value = await getPokemons(); 
        getNextRound(); 
    }

    const checkAnswer = ( selectedId: number ) => {
        const hasWon = randomPokemon.value.id === selectedId;
        if ( hasWon ) {
            gameStatus.value = GameStatus.Won;
            confetti({
                particleCount: 300,
                spread: 150,
                origin: { y: 0.6 }
            });
            score.value++;
        } else {
            gameStatus.value = GameStatus.Lost;
        }
    }
    
    onMounted(async () => {

        await new Promise( resolve => setTimeout( resolve, 2000 ) );
        pokemons.value = await getPokemons();
        getNextRound();
    });

    return {
        gameStatus,
        pokemons,
        isLoading,
        pokemonsOptions,
        randomPokemon,
        score,

        //Methods
        getNextRound,
        checkAnswer,
        resetGame,
    }
}