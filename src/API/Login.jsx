import axios from 'axios';

export const login = async (credentials) => {
  try {
    const response = await axios.post('api/v1/auth/login', credentials, { withCredentials: true });
    return response.data;
  } catch (error) {
    // Handle error response
    if (error.response) {
      throw error.response;
    } else {
      throw { error: 'Network Error' };
    }
  }
};
