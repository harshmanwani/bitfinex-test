import React from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

const TradeList = props => {

  const mockData = new Array(40).fill({ time: '21:19:52', price: '61,507', amount: 0.0050 }) || [];

  return (
    <div className="trade-list">
      <table className="text-sm">
        <thead className="divider text-light">
          <tr>
            <th></th>
            <th>TIME</th>
            <th>PRICE</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {
            mockData && mockData.map((data, index) => (
              <tr className="relative">
                {
                  index % 3
                  ?
                  <th><ChevronDown size={12} color="red"/></th>
                  :
                  <th><ChevronUp size={12} color="green"/></th>
                }
                <th>{data.time}</th>
                <th>{data.price}</th>
                <th>{data.amount}</th>
                {/* <div className="order-book-depth" style={{background: 'red', width: `${index}%`, left: 0}}/> */}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default TradeList;
