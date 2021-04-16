import React from "react"
import OrderBook from "./components/OrderBook"
import Ticker from "./components/Ticker"
import Trades from "./components/Trades"
import { SOCKET_URL_PUB } from "./utils/config"

class App extends React.Component {

  // instance of websocket connection as a class property
  ws = new WebSocket(SOCKET_URL_PUB)

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data)
      this.setState({ dataFromServer: message })
      console.log(message)
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
    }
  }

  render() {

    return (
      <div id="App">
        <OrderBook />
        <div>
          <Ticker />
          <Trades />
        </div>
      </div>
    );
  }
}

export default App;
