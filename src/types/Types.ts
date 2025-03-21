export interface ClientType {
    id: number;
    first_name: string;
    last_name: string;
    Street_address: string;
    city: string;
    province: string;
    postal_code: string;
    country: string;
    email: string;
    telephone_number: string;
    type_client: boolean;
    report_sent: boolean;
    date_report_sent: string | Date | null;
    date_created: Date | string;
    date_updated: Date | string;
}

export interface ClientTypeCreate {
    first_name: string;
    last_name: string;
    Street_address: string;
    city: string;
    province: string;
    postal_code: string;
    country: string;
    email: string;
    telephone_number: string;
    type_client: boolean;
}

export interface Reports {
    id: number;
    clientId: number;
    reportTitle: string;
    status: 'pending' | 'completed' | 'in-progress'; // Example of possible statuses for the report
    createdAt: string; // Timestamp of when the report was created
    updatedAt: string; // Timestamp of when the report was last updated
}
