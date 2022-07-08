import { shallow } from 'enzyme';
import Headline from './';
import { findByTestAttr, checkProps } from '../../utils/index';

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};
describe('Headline Component', () => {
  describe('Checking proptypes', () => {
    it('should not throw warning', () => {
      const expectedProps = {
        heading: 'test name',
        desc: 'test desc',
        tempArr: [
          {
            name: 'arr name',
            email: 'arr email',
            age: 23,
            isOnline: true,
          },
        ],
      };
      const propsError = checkProps(Headline, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe('with props', () => {
    let component;
    beforeEach(() => {
      component = setup({ heading: 'test heading', dec: 'test desc' });
    });

    it('Should render without erros', async () => {
      const wrapper = await findByTestAttr(component, 'headlineComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render heading', async () => {
      const wrapper = await findByTestAttr(component, 'headlineHeading');
      expect(wrapper.length).toBe(1);
    });

    it('Should render desc', async () => {
      const wrapper = await findByTestAttr(component, 'headlineDesc');
      expect(wrapper.length).toBe(1);
    });

    it('Should render correct heading', async () => {
      const wrapper = await findByTestAttr(component, 'headlineHeading');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('with no props', () => {
    let component;
    beforeEach(() => {
      component = setup();
    });

    it('should not render', async () => {
      const wrapper = await findByTestAttr(component, 'headlineComponent');
      expect(wrapper.length).toBe(0);
    });
  });
});
