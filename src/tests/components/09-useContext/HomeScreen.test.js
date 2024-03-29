import '../../../setupTest';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-UseContext/HomeScreen';
import { UserContext } from '../../../components/09-UseContext/UserContext';
import { user } from '../../fixtures/user';

describe('Pruebas en <HomeScreen />', () => {

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
