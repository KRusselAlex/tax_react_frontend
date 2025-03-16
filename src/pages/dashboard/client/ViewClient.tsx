import { useEffect, useState } from "react";
import Dashtemplate from "../../../components/dashboard/Dashtemplate";
import ClientTable from "../../../components/TableData";
import ClientForm from "../../../components/client/AddClient";
import axios from "axios";

const ViewClient = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch clients when the component mounts
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("/api/clients"); // Replace with your API endpoint
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Dashtemplate
        title="Manage Clients"
        description="Aperçu des statistiques et performances"
      >
        <ClientTable
          title="Add Client"
          data={clients}
          modalContent={<ClientForm />}
        />
      </Dashtemplate>
    </div>
  );
};

export default ViewClient;
