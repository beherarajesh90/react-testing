import { combineReducers } from 'redux';
import postsReducer from './posts/';
const RootReducer = combineReducers({
  postsReducer,
});

export default RootReducer;
