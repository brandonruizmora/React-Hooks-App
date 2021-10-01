import '../../../setupTest';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-UseContext/LoginScreen';
import { UserContext } from '../../../components/09-UseContext/UserContext';
import { setUser } from '../../fixtures/user';

describe('Pruebas en <LoginScreen />', () => {

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('Debe renderizar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de ejecutar el setUser con el argumento esperado', () => {

        wrapper.find('button').simulate('click');

        expect(setUser).toHaveBeenCalled();

        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name: 'Brandon',
            email: 'brandon_ruizmor@outlook.es'
        });

    });



});
