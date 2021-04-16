export const wsConnect = host => ({ type: 'WS_CONNECT', host });
export const wsConnecting = host => ({ type: 'WS_CONNECTING', host });
export const wsConnected = payload => ({ type: 'WS_CONNECTED', payload });
export const wsDisconnect = host => ({ type: 'WS_DISCONNECT', host });
export const wsDisconnected = host => ({ type: 'WS_DISCONNECTED', host });

const websocketInitialState = {};

export const websocketReducer = (state = { ...websocketInitialState }, action) => {
  switch (action.type) {
    case 'WS_CONNECT':
      return { ...state, host: action.host };
    case 'WS_CONNECTED':
      return { ...state, connection: action.payload };
    default:
      return state;
  }
};
