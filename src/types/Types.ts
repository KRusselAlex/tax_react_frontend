export interface Clients {
    name: string;
    email: string;
    phone: string;
}

export interface Reports {
    id: number;
    clientId: number;
    reportTitle: string;
    status: 'pending' | 'completed' | 'in-progress'; // Example of possible statuses for the report
    createdAt: string; // Timestamp of when the report was created
    updatedAt: string; // Timestamp of when the report was last updated
}
