import type { Pokemon } from '../../../../src/modules/pokemon/interfaces/pokemon.interface';


describe('Pokemon Interface', () => {
    test('should have id and name properties', () => {
        const pokemon: Pokemon = { id: 1, name: 'Bulbasaur' };
        expect(pokemon).toHaveProperty('id');
        expect(pokemon).toHaveProperty('name');
        expect(typeof pokemon.id).toBe('number');
        expect(typeof pokemon.name).toBe('string');
    });
});