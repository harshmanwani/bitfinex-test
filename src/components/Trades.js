import React from 'react';
import { ChevronDown } from 'react-feather';
import '../styles/trades.scss';
import Footer from './Footer';

const Trades = () => {
  return (
    <div id="trades" className="dark-bg dark-border">
      <div className="title divider">
        <ChevronDown size={14} />
        &nbsp;
        TRADES
        <span className="text-light text-m"> BTC/USD</span>
      </div>
      <div className="trade-list">list</div>
      <Footer />
    </div>
  );
};

export default Trades;