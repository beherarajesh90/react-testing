import { combineReducers } from 'redux';
import postsReducer from './posts/';
const RootReducer = combineReducers({
  posts: postsReducer,
});

export default RootReducer;
