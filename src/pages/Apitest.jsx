import React, { useEffect } from 'react';
import axios from 'axios';

function ApiTest() {
  const checkApi = async () => {
    try {
      const response = await axios.post('https://api.datavortex.nl/testapp/users', {
        username: 'testuser',
        email: 'testuser@gmail.com',
        password: 'testpassword',
        info: 'testinfo',
        authorities: [
          {
            authority: 'USER'
          }
        ]
      }, {
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json'
        }
      });

      console.log('Response Data:', response.data);
      console.log('Response Headers:', response.headers);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    checkApi();
  }, []);

  return (
    <div>
      <h1>API Request Example</h1>
    </div>
  );
}

export default ApiTest;
