import moxios from 'moxios';
import { fetchPosts } from '../actions';
import { testStore } from '../utils/index';

describe('Fetch posts action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('Store is updated correctly', () => {
    const expectedStore = [
      {
        title: 'test title 1',
        body: 'text',
      },
      {
        title: 'test title 2',
        body: 'text',
      },
      {
        title: 'test title 3',
        body: 'text',
      },
    ];
    const store = testStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedStore,
      });
    }, undefined);

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toStrictEqual(expectedStore);
    });
  });
});
