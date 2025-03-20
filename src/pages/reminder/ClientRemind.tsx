import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getClients } from "../../services/clientApi";
import Dashtemplate from "../../components/dashboard/Dashtemplate";
import ClientTable from "../../components/TableData";
import ClientForm from "../../components/client/AddClient";
import ErrorModal from "../../components/errorModal/ErrorModal";

interface ClientInter {
  id: number;
  full_name: string;
  telephone_number: string;
  email: string;
  report_sent: boolean;
  type_client: boolean;
  // Add any other properties your client object has
}

const ClientRemind = () => {
  const [clients, setClients] = useState<ClientInter[]>([]); // Specify the type for clients

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch clients when the component mounts
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await getClients();
        console.log("data", response.data);
        const filteredClients: ClientInter[] = response.data.filter(
          (client: ClientInter) => !client.report_sent
        );

        setClients(filteredClients);
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

export default ClientRemind;
