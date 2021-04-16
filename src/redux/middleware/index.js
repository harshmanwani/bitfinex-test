import * as actions from '../websocket';
import * as bitActions from '../reducers/bitfinex';
import * as actionTypes from '../actionTypes.js'

const socketMiddleware = () => {
  let socket = null;

  const onOpen = store => (event) => {
    console.log(event);
    // store.dispatch(actions.wsConnected(event.target.url));
  };

  const onClose = store => () => {
    store.dispatch(actions.wsDisconnected());
  };

  const onMessage = store => (event) => {
    const payload = JSON.parse(event.data);
    console.log("onmessage", payload);
    if (Array.isArray(payload) && payload.length === 2) {
      console.log("setting ticker");
      store.dispatch(bitActions.tickerData({ type: actionTypes.TICKER_DATA, payload: payload[1] }));
    }
    switch (payload.event) {
      case 'info':
        store.dispatch(actions.wsConnected(payload));
        break;
      case 'ping':
        store.dispatch(bitActions.ping(payload));
        break;
      case 'subscribed':
        store.dispatch(bitActions.tickerData(payload));
        break;
      default:
        console.log(payload);
        break;
    }
  };

  return store => next => (action) => {
    switch (action.type) {
      case 'WS_CONNECT':
        if (socket !== null) {
          socket.close();
        }

        // connect to the remote host
        socket = new WebSocket(action.host);

        // websocket handlers
        socket.onmessage = onMessage(store);
        socket.onclose = onClose(store);
        socket.onopen = onOpen(store);

        break;
      case 'WS_DISCONNECT':
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;
      case 'SET_TICKER``':
        socket.send(JSON.stringify({
          event: "subscribe",
          channel: action.channel
        }));
        break;
      case 'PING':
        socket.send(JSON.stringify(action.payload));
        break;
      case actionTypes.TICKER:
        socket.send(JSON.stringify(action.payload));
        break;
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();
