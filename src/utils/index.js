import { configureStore } from '@reduxjs/toolkit';
import checkPropTypes from 'check-prop-types';
import thunk from 'redux-thunk';
import RootReducer from '../reducers';

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );
  return propsErr;
};
export const testStore = (initialState) => {
  const middlewares = [thunk];
  return configureStore(
    {
      reducer: RootReducer,
      middleware: middlewares,
    },
    initialState
  );
};
