import { mount } from "@vue/test-utils";
import PokemonOptions from "../../../../src/modules/pokemon/components/PokemonOptions.vue";

 


const options = [
    { name: 'bulbasaur', id: 1 },
    { name: 'ivysaur', id: 2 },
    { name: 'venusaur', id: 3 },
];

describe('<PokemonOptions />', () => {

    test('should render buttons with correct text', () => {
        const wrapper = mount(PokemonOptions, {
            props: {
                options,
                correctAnswer: 1,
                blockedOptions: false
            }
        });

        const buttons = wrapper.findAll('button');
        expect( buttons.length ).toBe(options.length);
        buttons.forEach( ( btn, index ) => {
            expect( btn.text() ).toBe( options[index]?.name );
        } );
    });

    test('should emit "selectedOption" event when a button is clicked', async () => {
        const wrapper = mount(PokemonOptions, {
            props: {
                options,
                correctAnswer: 1,
                blockedOptions: false
            }
        });

        const [b1, b2, b3] = wrapper.findAll('button');
        await b1?.trigger('click');
        await b2?.trigger('click');
        await b3?.trigger('click');

        expect( wrapper.emitted('selectedOption') ).toBeTruthy();
        expect( wrapper.emitted().selectedOption[0] ).toEqual( [1] );
        expect( wrapper.emitted().selectedOption[1] ).toEqual( [2] );
        expect( wrapper.emitted().selectedOption[2] ).toEqual( [3] );

    });

    test('should disable buttons when blockSelection is true', () => {
        const wrapper = mount(PokemonOptions, {
            props: {
                options,
                correctAnswer: 1,
                blockedOptions: true
            }
        });

        const buttons = wrapper.findAll('button');
        expect( buttons.length ).toBe(options.length);
        buttons.forEach( btn  => {
            expect( btn.attributes() ).toHaveProperty( 'disabled' );
        } );
    });

    test('should apply correct styling classes based on correct/incorrect answers', async () => {
        const correctAnswer = 2;
        const wrapper = mount(PokemonOptions, {
            props: {
                options,
                correctAnswer,
                blockedOptions: true
            }
        }); 
        const buttons = wrapper.findAll('button');

        buttons.forEach( (btn, index)  => {
            if(options[index]?.id === correctAnswer) {
                expect( btn.classes() ).toContain('correct');
                expect( btn.classes() ).not.toContain('incorrect');
            } else {
                expect( btn.classes() ).toContain('incorrect');
                expect( btn.classes() ).not.toContain('correct');
            }
        }
        );
    });
});