import axiosInstance from './axiosApi'; // Import your axios instance

const sendNotification = async (client_id: number) => {


    try {
        const response = await axiosInstance.post('/notifications/', { 'client_id': client_id });
        console.log('notification sent successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error sending notification:', error);
        throw error;
    }
};

export default sendNotification;