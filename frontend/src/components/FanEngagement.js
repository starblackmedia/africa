import React from 'react';

const FanEngagement = () => {
    const messages = [
      { fan: 'Fan A', message: 'Loved your latest release!' },
      { fan: 'Fan B', message: 'When is your next tour?' },
    ];
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Fan Engagement</h2>
        <ul className="space-y-4">
          {messages.map((msg, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold">{msg.fan}</h3>
              <p>{msg.message}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FanEngagement;
  