import '../../../setupTest';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-UseContext/UserContext';
import { AppRouter } from '../../../components/09-UseContext/AppRouter';
import { user } from '../../fixtures/user';

describe('Pruebas en <AppRouter />', () => {

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('Debe de renderizarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });
    
});
