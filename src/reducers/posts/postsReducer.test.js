import postsReducer from '.';
import { types } from '../../actions/types';

describe('Posts Reducer', () => {
  it('Should return inital state', () => {
    const posts = postsReducer(undefined, {});
    expect(posts).toStrictEqual([]);
  });

  it('Should return new state', () => {
    const newPosts = [{ title: 1 }, { title: 2 }, { title: 3 }];
    const posts = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: newPosts,
    });
    expect(posts).toStrictEqual(newPosts);
  });
});
