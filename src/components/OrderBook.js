import React from 'react';
import { ChevronDown } from 'react-feather';
import '../styles/order-book.scss';
import Footer from './Footer';
import OrderTable from './OrderTable';

const OrderBook = () => {
  return (
    <div id="order-book" className="dark-bg dark-border">
      <div className="title divider">
        <ChevronDown size={14} />
        &nbsp;
        ORDER BOOK
        <span className="text-light text-m"> BTC/USD</span>
      </div>
      <div className="table">
        <OrderTable />
        &nbsp;
        <OrderTable reverse/>
      </div>
      <Footer />
    </div>
  );
};

export default OrderBook;