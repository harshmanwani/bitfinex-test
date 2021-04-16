import * as actionTypes from '../actionTypes.js'

export const ping = payload => ({ type: actionTypes.PING, payload });
export const ticker = payload => ({ type: actionTypes.TICKER, payload });
export const tickerData = payload => ({ type: actionTypes.TICKER_DATA, payload });

const websocketInitialState = {};

export const bifinexReducer = (state = { ...websocketInitialState }, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.PING:
      return { ...state, ping: action.payload };
    case actionTypes.TICKER:
      return { ...state, ticker_req: action.payload };
    case actionTypes.TICKER_DATA:
      return { ...state, ticker: action.payload.payload };
    default:
      return state;
  }
};
