import pokemonApi from '../../../../src/modules/pokemon/api/pokemonApi';


describe('pokemonApi', () => {

    test('should be configured as expected', () => {
        const baseURL = "https://pokeapi.co/api/v2/pokemon";
        expect( pokemonApi.defaults.baseURL ).toBe( baseURL );
    });
} );