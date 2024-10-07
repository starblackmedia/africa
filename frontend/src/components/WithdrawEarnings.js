import React, { useState } from 'react';

const WithdrawEarnings = () => {
    const balance = 500.00;
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Withdraw Earnings</h2>
        <p className="text-gray-700">Available Balance: ${balance.toFixed(2)}</p>
        <button className="bg-green-500 text-white py-2 px-4 mt-4 rounded-lg">
          Withdraw
        </button>
      </div>
    );
  };
  
  export default WithdrawEarnings;
  