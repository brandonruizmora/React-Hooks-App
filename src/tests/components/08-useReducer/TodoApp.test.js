import '../../../setupTest';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { act } from '@testing-library/react';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoApp />', () => {

    const wrapper = shallow(<TodoApp />);
    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de agregar un TODO', () => {

        const wrapper = mount(<TodoApp />);

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddNewTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddNewTodo')(demoTodos[1]);
        });

        expect( wrapper.find('h1').text() ).toBe('TodoApp (2)');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
    });

    test('Debe de eliminar un TODO', () => {

        const wrapper = mount(<TodoApp />);

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddNewTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddNewTodo')(demoTodos[1]);
            wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        });

        expect( wrapper.find('h1').text() ).toBe('TodoApp (1)');
    });

});
