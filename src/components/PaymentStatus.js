import React from 'react';

const PaymentStatus = ({ isPaid }) => {
  return (
    <div>
      <h2>Payment Status</h2>
      <p>{isPaid ? 'Paid' : 'Not Paid'}</p>
    </div>
  );
};

export default PaymentStatus;