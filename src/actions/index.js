import { types } from '../actions/types';
import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
  await axios('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((res) => {
      dispatch({
        type: types.GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
