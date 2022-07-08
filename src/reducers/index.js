import { combineReducers } from 'redux';
import SuccessReducer from './successReducer';
const RootReducer = combineReducers({
  SuccessReducer,
});

export default RootReducer;
