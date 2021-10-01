import '../../../setupTest';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-UseContext/HomeScreen';
import { UserContext } from '../../../components/09-UseContext/UserContext';

describe('Pruebas en <HomeScreen />', () => {

    const user = {
        id: 1,
        nombre: 'Brandon',
        email: 'brandon@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('Debe de retornar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });
    


});
