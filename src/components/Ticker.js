import React from 'react';
import { ChevronDown } from 'react-feather';
import '../styles/ticker.scss'

const Ticker = () => {
  return (
    <div id="ticker" className="dark-bg dark-border flex divider">
      <span className="img" />
      <span className="ticker-info flex-column">
        <span>BTC/USD</span>
        <span className="text-sm">
          <span className="text-light">VOL </span>
          <span className="text-underline">656,857,133 </span>
          <span className="text-light">USD</span>
        </span>
        <span className="text-sm">
          <span className="text-light">LOW </span>
          60,005
        </span>
      </span>
      <span className="ticker-price flex-column">
        <span>60,744</span>
        <span className="red text-m">
          1,870.00 
          <ChevronDown size={14}/>
          (2.99%)
        </span>
        <span className="text-sm">
          <span className="text-light">High </span>
          63,845
        </span>
      </span>
    </div>
  );
};

export default Ticker;