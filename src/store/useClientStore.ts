import { ClientType } from "@/types/Types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


interface ClientStore {
    clients: ClientType[];
    addClientStore: (client: ClientType) => void;
    updateClientStore: (id: number, updatedData: Partial<ClientType>) => void;
    deleteClientStore: (id: number) => void;
    getClientById: (id: number) => ClientType | undefined;
    setClients: (clients: ClientType[]) => void;
    getClientsWithPendingReports: () => ClientType[];
    getClientsByType: (type_client: boolean) => ClientType[]; // New function to filter by type_client
}

export const useClientStore = create<ClientStore>()(
    persist((set, get) => ({
        clients: [],

        // Set all clients (fetch from API)
        setClients: (clients) => set({ clients }),

        // Add a new client
        addClientStore: (client) =>
            set((state) => ({ clients: [...state.clients, client] })),

        // Update a client by ID
        updateClientStore: (id, updatedData) =>
            set((state) => ({
                clients: state.clients.map((client) =>
                    client.id === id ? { ...client, ...updatedData } : client
                ),
            })),

        // Delete a client by ID
        deleteClientStore: (id) =>
            set((state) => ({
                clients: state.clients.filter((client) => client.id !== id),
            })),

        // Get a specific client by ID
        getClientById: (id) => get().clients.find((client) => client.id === id),

        // Get clients with pending reports
        getClientsWithPendingReports: () =>
            get().clients.filter((client) => client.report_sent === false),

        // Get clients by type_client (true or false)
        getClientsByType: (type_client: boolean) =>
            get().clients.filter((client) => client.type_client === type_client),
    }),

        {
            name: "client-storage", // Unique storage key
            storage: createJSONStorage(() => localStorage) // Use localStorage (default)
        }
    ));
