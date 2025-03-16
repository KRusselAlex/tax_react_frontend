import axiosInstance from "./axiosApi";


// Create Client
export const createClients = async (clientsData: { name: string; email: string; phone: string }[]) => {
    try {
        const response = await axiosInstance.post('/clients/', { clients: clientsData });
        return response.data; // Assuming the API returns the created clients or a success message
    } catch (error) {
        console.error('Error creating clients:', error);
        throw error;
    }
};

// Get All Clients
export const getClients = async () => {
    try {
        const response = await axiosInstance.get('/clients');
        return response.data;
    } catch (error) {
        console.error('Error fetching clients:', error);
        throw error;
    }
};

// Get Client by ID
export const getClientById = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/clients/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching client by ID:', error);
        throw error;
    }
};

// Update Client
export const updateClient = async (id: string, clientData: { name: string; email: string; phone: string }) => {
    try {
        const response = await axiosInstance.put(`/clients/${id}`, clientData);
        return response.data;
    } catch (error) {
        console.error('Error updating client:', error);
        throw error;
    }
};

// Delete Client
export const deleteClient = async (id: string) => {
    try {
        const response = await axiosInstance.delete(`/clients/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting client:', error);
        throw error;
    }
};
