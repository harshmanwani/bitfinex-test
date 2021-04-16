import React from "react"
import Ticker from "./components/Ticker"
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
        <div id="order-book" className="dark-bg dark-border">Order Book</div>
        <div>
          <Ticker/>
          <div id="trade-list" className="dark-bg dark-border">Trades List</div>
        </div>
      </div>
    );
  }
}

export default App;
