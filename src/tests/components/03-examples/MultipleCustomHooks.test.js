import '../../../setupTest';
import { shallow } from "enzyme";
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks />', () => {

    test('Debe mostrarse correctamente', () => {
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {}
        });
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        const wrapper = shallow( <MultipleCustomHooks /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar la informacion', () => {
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {}
        });
        useFetch.mockReturnValue({
            data: [{
                author: 'Brandon',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('p').text() ).toBe( 'Hola Mundo' );
        // console.log( wrapper.find('button').at(1).html());
    });
    
});
