import '../setupTest';
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe('Pruebas en <HookApp />', () => {
    test('Debe renderizar correctamente', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
    
});
