import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

const middlewares = [ReduxThunk];

export const store = configureStore({
  reducer: RootReducer,
  middleware: middlewares,
});
