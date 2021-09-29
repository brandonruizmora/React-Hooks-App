import '../../setupTest';
import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en UseCounter', () => {

    test('Debe retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('Debe retornar valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    });

    test('Debe de incrementar en 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;
        act(() => {
            increment();
        })
        const { counter } = result.current;
        expect(counter).toBe(101);
    });

    test('Debe de restar en 5', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;
        act(() => {
            decrement(5);
        })
        const { counter } = result.current;
        expect(counter).toBe(95);
    });

    test('Debe de restablecer el valor', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment, reset } = result.current;
        act(() => {
            increment(100);
            reset();
        })
        const { counter } = result.current;
        expect(counter).toBe(100);
    });    

});
