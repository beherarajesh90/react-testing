import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './reducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];

export const store = configureStore({
  reducer: RootReducer,
  middleware: middlewares,
});
