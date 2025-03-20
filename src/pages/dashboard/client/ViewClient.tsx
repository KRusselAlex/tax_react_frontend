import { useEffect, useState } from "react";
import Dashtemplate from "../../../components/dashboard/Dashtemplate";
import ClientTable from "../../../components/TableData";
import ClientForm from "../../../components/client/AddClient";
import { getClients } from "../../../services/clientApi";
import { motion } from "framer-motion";
import ErrorModal from "../../../components/errorModal/ErrorModal";

const ViewClient = () => {
  const [clients, setClients] = useState([]); // Specify the type for clients

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch clients when the component mounts
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await getClients(); // Replace with your API endpoint
        console.log("data", response.data);
        setClients(response.data);
      } catch (error) {
        setError("Error fetching clients");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);
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

  if (error) {
    return (
      <div>
        <ErrorModal
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          errorMessage={error}
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
