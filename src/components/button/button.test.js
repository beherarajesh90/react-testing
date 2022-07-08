import { shallow } from 'enzyme';
import SharedButton from '.';
import { checkProps, findByTestAttr } from '../../utils';

describe('SharedButton Component', () => {
  describe('Checking PropTypes', () => {
    it('Should NOT throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {},
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: mockFunc,
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it('Should Render a button', async () => {
      const button = await findByTestAttr(wrapper, 'sharedButton');
      expect(button.length).toBe(1);
    });

    it('Should emit callback on click event', async () => {
      const button = await findByTestAttr(wrapper, 'sharedButton');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
