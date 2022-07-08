import { shallow } from 'enzyme';
import ListItem from '.';
import { checkProps, findByTestAttr } from '../../utils/index';

describe('ListItem Component', () => {
  describe('Checking Proptypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        title: 'test title',
        desc: 'some text',
      };
      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const expectedProps = {
        title: 'test title',
        desc: 'some text',
      };
      wrapper = shallow(<ListItem {...expectedProps} />);
    });

    it('Should render listitem', async () => {
      const listItem = await findByTestAttr(wrapper, 'listItemComponent');
      expect(listItem.length).toBe(1);
    });

    it('Should render title', async () => {
      const title = await findByTestAttr(wrapper, 'listItemTitle');
      expect(title.length).toBe(1);
    });

    it('Should render desc', async () => {
      const desc = await findByTestAttr(wrapper, 'listItemDesc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Should not render', () => {
    let wrapper;
    beforeEach(() => {
      const expectedProps = {
        desc: 'some text',
      };
      wrapper = shallow(<ListItem {...expectedProps} />);
    });
    it('should not render when title is null', async () => {
      const listItem = await findByTestAttr(wrapper, 'listItemComponent');
      expect(listItem.length).toBe(0);
    });
  });
});
