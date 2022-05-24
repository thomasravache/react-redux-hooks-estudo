import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import accountReducer from './reducers/accountReducer';

const reducer = {
  account: accountReducer,
  //outro: outroReducer,
}

const store = configureStore({
  reducer,
  preloadedState: {},
});

export default store;
