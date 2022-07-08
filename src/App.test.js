import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttr, testStore } from './utils/index';

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        { title: 'title 1', body: 'text' },
        { title: 'title 2', body: 'text' },
        { title: 'title 3', body: 'text' },
      ],
    };
    wrapper = setup(initialState);
  });
  it('Should render without error', async () => {
    const app = await findByTestAttr(wrapper, 'appComponent');
    expect(app.length).toBe(1);
  });
});
