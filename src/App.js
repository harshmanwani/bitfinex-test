import React from "react"
import { connect } from "react-redux"
import OrderBook from "./components/OrderBook"
import Ticker from "./components/Ticker"
import Trades from "./components/Trades"
import { ping } from "./redux/reducers/bitfinex"
import { wsConnect } from "./redux/websocket"
import { SOCKET_URL_PUB } from "./utils/config"

class App extends React.Component {

  async componentDidMount() {
    await this.props.wsConnect(SOCKET_URL_PUB);
  }

  render() {

    return (
      <div id="App">
        {
          this.props.connection && this.props.connection.serverId
          &&
          <>
            <OrderBook />
            <div>
              <Ticker />
              <Trades />
            </div>
          </>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    connection: state.websocket.connection,
    redux: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    wsConnect: host => dispatch(wsConnect(host)),
    wsPing: data => dispatch(ping(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
