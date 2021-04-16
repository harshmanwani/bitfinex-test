import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import wsMiddleware from './middleware';

const middleware = [reduxThunk, wsMiddleware];
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
  ),
);

export default store;
