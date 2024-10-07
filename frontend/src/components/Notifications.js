import React from 'react';

const Notifications = () => {
    const notifications = [
      'New follower: User123',
      'Fan commented on your post',
      'Upcoming event reminder',
    ];
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <ul className="space-y-2">
          {notifications.map((notification, index) => (
            <li key={index} className="text-gray-700">
              {notification}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Notifications;
  