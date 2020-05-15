import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import combineReducers from './reducers/index';

const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware()),
);

export default store;
