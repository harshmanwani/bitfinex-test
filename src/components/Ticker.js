import React, { useEffect } from 'react';
import { ChevronDown } from 'react-feather';
import { connect } from 'react-redux';
import { ping, ticker } from '../redux/reducers/bitfinex';
import '../styles/ticker.scss'

const Ticker = ({ setTicker, tickerData }) => {

  useEffect(async () => {
    // await props.wsPing({
    //   event: "ping",
    //   cid: 1234
    // });
    await setTicker({
      event: 'subscribe',
      channel: 'ticker',
      symbol: 'tBTCUSD'
    })
  }, [])


  if (tickerData && Array.isArray(tickerData)) {
    return (
      <div id="ticker" className="dark-bg dark-border flex divider">
        <span className="img" />
        <span className="ticker-info flex-column">
          <span>BTC/USD</span>
          <span className="text-sm">
            <span className="text-light">VOL </span>
            <span className="text-underline">{tickerData[7]} </span>
            <span className="text-light">USD</span>
          </span>
          <span className="text-sm">
            <span className="text-light">LOW </span>
            {tickerData[9]}
        </span>
        </span>
        <span className="ticker-price flex-column">
          <span>{tickerData[0]}</span>
          <span className="red text-m">
            {tickerData[4]}
          <ChevronDown size={14} />
          (2.99%)
        </span>
          <span className="text-sm">
            <span className="text-light">High </span>
            {tickerData[8]}
        </span>
        </span>
      </div>
    );
  }
  else {
    return <div>
      Loading...
    </div>
  }
};

function mapStateToProps(state) {
  return {
    tickerData: state.exchange.ticker,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    wsPing: data => dispatch(ping(data)),
    setTicker: data => dispatch(ticker(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticker);
