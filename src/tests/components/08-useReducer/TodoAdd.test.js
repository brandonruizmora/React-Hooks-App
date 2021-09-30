import '../../../setupTest';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd />', () => {

    const handleAddNewTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd 
        handleAddNewTodo={ handleAddNewTodo }
        />
    )

    test('Debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('No debe llamar handleAddNewTodo', () => {

        wrapper.find('button').simulate('click');
        expect(handleAddNewTodo).not.toHaveBeenCalled();

    });

    test('Debe llamar la funcion handleAddNewTodo', () => {

        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        expect( handleAddNewTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddNewTodo ).toHaveBeenCalledWith( expect.any(Object) ); // { }
        expect( handleAddNewTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });
        expect( wrapper.find('input').prop('value') ).toBe('');


    });
    
    


    
});
