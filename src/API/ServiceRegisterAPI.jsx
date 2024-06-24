import axios from 'axios';

export const ServiceRegisterAPI = async (credentials) => {
    const token = sessionStorage.getItem('token');
    try {
        const response = await axios.post(
            'api/v1/report/service-register',
            credentials,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    token: token,
                },
            }
        );
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
