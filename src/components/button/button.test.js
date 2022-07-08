import { shallow } from 'enzyme';
import SharedButton from '.';
import { checkProps, findByTestAttr } from '../../utils';

describe('Shared Button', () => {
  it('Should not show warning', () => {
    const expectedProps = {
      buttonText: 'test button',
      eventEmit: () => {},
    };
    const propErr = checkProps(SharedButton, expectedProps);
    expect(propErr).toBeUndefined();
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'test button',
        eventEmit: () => {},
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it('Should render Shared Button', async () => {
      const btn = await findByTestAttr(wrapper, 'sharedButton');
      expect(btn.length).toBe(1);
    });
  });
});
