// api.test.js

import axios from 'axios';
import { expect } from 'chai';

describe('API Tests', () => {
  const apiUrl = 'http://localhost:4010'; // The URL where Prism is running

  it('should return a greeting message', async () => {
    try {
      const response = await axios.get(`${apiUrl}/testing`);

      // Check the status code
      expect(response.status).to.equal(200);

      // Check the response structure
      expect(response.data).to.be.an('object');
      expect(response.data).to.have.property('message');
      expect(response.data.message).to.equal('Testing Prism');
    } catch (error) {
      // Handle errors
      console.error('API request failed:', error);
    }
  });

  it('should return 404 for non-existent endpoint', async () => {
    try {
      await axios.get(`${apiUrl}/nonexistent`);
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }
  });
});
