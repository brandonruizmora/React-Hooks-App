import '../../../setupTest';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            index={0}
            handleToggle={ handleToggle }
            handleDelete={ handleDelete }
        />
    );

    test('Debe de renderizar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe llamar la funcion handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
    });

    test('Debe llamar la funcion handleToggle', () => {
        wrapper.find('span').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );
    });

    test('Debe de mostrar el texto correctamente', () => {
        expect( wrapper.find('span').text() ).toBe(`1. ${demoTodos[0].desc}`);
    });

    test('Debe de tener la clase complete si el TODO.done = true', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo={todo}
                index={0}
                handleToggle={ handleToggle }
                handleDelete={ handleDelete }
            />
        );

        expect( wrapper.find('span').hasClass('text-decoration-line-through') ).toBe( true );

    });

});
