import axiosInstance from './axiosApi'; // Import your axios instance

interface SendReportParams {
    file: File;
    clients: number;
}

const sendReport = async ({ file, clients }: SendReportParams) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('clients', clients.toString());

    try {
        const response = await axiosInstance.post('/reports/', formData);
        console.log('Report sent successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error sending report:', error);
        throw error;
    }
};

export default sendReport;
