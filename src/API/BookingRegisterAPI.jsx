import axios from 'axios';

export const BookingRegisterAPI = async (credentials) => {
    const token = sessionStorage.getItem('token');
    try {
        const response = await axios.post(
            'api/v1/report/booking-status',
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
        // console.log(error.response)
        // Handle error response
        if (error.response) {
            throw error.response;
        } else {
            throw { error: 'Network Error' };
        }
    }
};
