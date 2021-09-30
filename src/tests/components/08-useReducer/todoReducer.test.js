import { todoReducer } from "../../../components/08-useReducer/TodoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en todoReducer', () => {

    test('Debe de retornar el estado por defecto', () => {

        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);

    });

    test('Debe de agregar un TODO', () => {

        const newTodo = {
            id: 3,
            description: 'Aprender Mongo',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        };

        const state = todoReducer(demoTodos, action);

        expect( state.length ).toBe( 3 );

        expect( state ).toEqual([...demoTodos, newTodo]);

        expect( state[state.length - 1] ).toEqual(newTodo);

    });

    test('Debe de eliminar un TODO', () => {

        const idTodo = 2;

        const action = {
            type: 'delete',
            payload: idTodo
        };

        const state = todoReducer(demoTodos, action);

        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [ demoTodos[0] ] );

    });

    test('Debe de hacer toggle de un TODO', () => {

        const idTodo = 1; 

        const action = {
            type: 'toggle',
            payload: idTodo
        };

        const state = todoReducer(demoTodos, action);

        expect( state[0].done ).toBe( true );
        expect( state[1].done ).toBe( false );

    });
    
});
