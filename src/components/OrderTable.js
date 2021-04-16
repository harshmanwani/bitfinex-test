import React from 'react';

const OrderTable = props => {

  const mockData = new Array(40).fill({ count: 2, amount: 4.776, total: 8.509, price: '61,230' }) || [];

  return (
    <div className="order-table">
      <table className="text-sm" style={props.reverse ? { direction: 'rtl', borderLeft: '1px solid #6464644d' } : {}}>
        <thead className="divider text-light">
          <tr>
            <th>COUNT</th>
            <th>AMOUNT</th>
            <th>TOTAL</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {
            mockData && mockData.map((data, index) => (
              <tr className="relative">
                <th>{data.count}</th>
                <th>{data.amount}</th>
                <th>{data.total}</th>
                <th>{data.price}</th>
                {/* <div className="order-book-depth" style={{background: 'red', width: `${index}%`, left: 0}}/> */}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
