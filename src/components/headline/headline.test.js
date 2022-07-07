import { shallow } from 'enzyme';
import Headline from './';
import { findByTestAttr } from '../../utils/index';

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};
describe('Headline Component', () => {
  describe('with props', () => {
    let component;
    beforeEach(() => {
      component = setup({ heading: 'test heading', dec: 'test desc' });
    });

    it('Should render without erros', () => {
      const wrapper = findByTestAttr(component, 'headlineComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render heading', () => {
      const wrapper = findByTestAttr(component, 'headlineHeading');
      expect(wrapper.length).toBe(1);
    });

    it('Should render desc', () => {
      const wrapper = findByTestAttr(component, 'headlineDesc');
      expect(wrapper.length).toBe(1);
    });

    it('Should render correct heading', () => {
      const wrapper = findByTestAttr(component, 'headlineHeading');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('with no props', () => {
    let component;
    beforeEach(() => {
      component = setup();
    });

    it('should not render', () => {
      const wrapper = findByTestAttr(component, 'headlineComponent');
      expect(wrapper.length).toBe(0);
    });
  });
});
