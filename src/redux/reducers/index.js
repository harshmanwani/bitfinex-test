
import { combineReducers } from 'redux';
import { bifinexReducer } from './bitfinex';
import { websocketReducer } from '../websocket';

const rootReducer = combineReducers({
  websocket: websocketReducer,
  exchange: bifinexReducer,
});

export default rootReducer;
