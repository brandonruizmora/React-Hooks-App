import '../../../setupTest';
import { shallow } from "enzyme";
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef />', () => {

    test('Debe de mostrarse correctamente', () => {
        const wrapper = shallow(<RealExampleRef />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrarse el componente <MultipleCustomHooks />', () => {
        const wrapper = shallow(<RealExampleRef />);
        wrapper.find('button').simulate('click');
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
    
});
