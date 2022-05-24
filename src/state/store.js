import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: reducers,
  preloadedState: {},
  enhancers: [applyMiddleware(thunk)]
});

export default store;
