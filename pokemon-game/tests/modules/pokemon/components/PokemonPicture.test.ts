import { mount } from '@vue/test-utils';
import PokemonPicture from '../../../../src/modules/pokemon/components/PokemonPicture.vue';

describe('<PokemonPicture />', () => {

    test('should render the hidden image when showPokemon prop is false', () => {

        const wrapper = mount(PokemonPicture, {
            props: {
                showPokemon: false,
                pokemonId: 1
            }
        });

        const image = wrapper.find('img').element as HTMLImageElement;
        expect( image.src ).toBe( `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ wrapper.props('pokemonId') }.png` );
        expect( image.classList ).toContain( 'brightness-0' );

    });

    test('should render the visible image when showPokemon prop is true', () => {

        const wrapper = mount(PokemonPicture, {
            props: {
                showPokemon: true,
                pokemonId: 1
            }
        });

        const image = wrapper.find('img').element as HTMLImageElement;
        expect( image.src ).toBe( `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ wrapper.props('pokemonId') }.png` );
        expect( image.classList ).toContain( 'fade-in' );

    });

});