import '../../setupTest';
import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en UseForm', () => {

    const initialForm = {
        name: 'Brandon',
        email: 'brandon@gmail.com'
    }

    test('Debe de regresar el formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ values, handleInputChange, reset ] = result.current;
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toEqual('function');

    });

    test('Debe de cambiar el valor del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange ] = result.current;
        act(() => {
            const e = {
                target: {
                    name: 'name',
                    value: 'Veronica'
                }
            }
            handleInputChange(e);
        });
        const [ values ] = result.current;
        expect(values).toEqual({
            ...initialForm,
            name: 'Veronica'
        });
    });

    test('Debe de restablecer el formulario con reset', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange, reset ] = result.current;
        act(() => {
            const e = {
                target: {
                    name: 'name',
                    value: 'Francisco'
                }
            }
            handleInputChange(e);
            reset();
        });
        const [ values ] = result.current;
        expect(values).toEqual(initialForm);
    });
    
    
});