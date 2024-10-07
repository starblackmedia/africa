import React from 'react';

const SocialMedia = () => {
    const socialLinks = [
      { platform: 'Instagram', url: 'https://instagram.com' },
      { platform: 'Twitter', url: 'https://twitter.com' },
    ];
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Social Media Links</h2>
        <ul className="space-y-4">
          {socialLinks.map((link, index) => (
            <li key={index} className="flex items-center">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {link.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SocialMedia;
  