import '../../../setupTest';
import { mount } from 'enzyme';
import { AboutScreen } from '../../../components/09-UseContext/AboutScreen';
import { UserContext } from '../../../components/09-UseContext/UserContext';
import { user, setUser } from '../../fixtures/user';
import { act } from '@testing-library/react';

describe('Pruebas en <AboutScreen />', () => {

    const wrapper = mount(
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <AboutScreen />

        </UserContext.Provider>
    );

    test('Debe de renderizarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de tener objeto correctamente en etiqueta pre', () => {
        
        expect(JSON.parse(wrapper.find('pre').text())).toEqual(user);

    });

    test('Debe de llamar simular logout', () => {

        wrapper.find('button').simulate('click');


        expect(setUser).toHaveBeenCalledWith({});

    });
    


});
