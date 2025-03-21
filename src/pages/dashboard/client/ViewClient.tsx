import { useEffect, useState } from "react";
import Dashtemplate from "../../../components/dashboard/Dashtemplate";
import ClientTable from "../../../components/TableData";
import ClientForm from "../../../components/client/AddClient";
import { getClients } from "../../../services/clientApi";
import { motion } from "framer-motion";
import { useClientStore } from "@/store/useClientStore";


const ViewClient = () => {
  const { clients, setClients } = useClientStore();
  const [loading, setLoading] = useState(true);

  // Fetch clients when the component mounts

  useEffect(() => {
    const fetchClients = async () => {
      if (clients.length > 0) setLoading(false); // Don't fetch again if clients are already in the store

      try {
        const response = await getClients();
        setClients(response.data);
      } catch (error) {
        setClients([]);
        setLoading(false);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, [clients, setClients]);
  // Display loading or error messages if necessary
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <motion.div
          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <div>
      <Dashtemplate
        title="Manage Clients"
        description="Aperçu des statistiques et performances"
      >
        {clients ? (
          <ClientTable
            title="Add Client"
            data={clients}
            modalContent={<ClientForm />}
          />
        ) : (
          <>There is no Clients </>
        )}
      </Dashtemplate>
    </div>
  );
};

export default ViewClient;
