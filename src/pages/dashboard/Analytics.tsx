import Dashtemplate from "../../components/dashboard/Dashtemplate";
import { FaUserPlus, FaEnvelope, FaUser, FaBuilding } from "react-icons/fa";
import { PieChart } from "@mui/x-charts/PieChart";
import Card from "../../components/Card";
import { useClientStore } from "@/store/useClientStore";
import ClientTable from "@/components/TableData";
import ClientForm from "@/components/client/AddClient";
import { useEffect, useState } from "react";
import { getClients } from "@/services/clientApi";
import { motion } from "framer-motion";

const Analytics = () => {
  const { clients, getClientsByType,setClients } = useClientStore();
  const companies = getClientsByType(true);
  const individuals = getClientsByType(false);
  


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
        title="Dashboard"
        description="Overview of statistics and performance"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 border rounded-xl bg-white">
              <p className="text-lg font-medium text-primaryColor mb-2">
                Clients Trends
              </p>
              <PieChart
                series={[
                  {
                    data: [
                      {
                        id: 0,
                        value: individuals?.length,
                        label: "Individuals",
                      },
                      { id: 1, value: companies?.length, label: "Companies" },
                    ],
                  },
                ]}
                width={400}
                height={200}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Card
                title="Total Clients"
                number={clients?.length}
                icon={FaUserPlus}
              />
              <Card title="Reminders Sent" number={85} icon={FaEnvelope} />
              <Card
                title="Companies"
                number={companies.length}
                color="text-yellow-500"
                icon={FaBuilding}
              />
              <Card
                title="Individuals"
                number={individuals?.length}
                color="text-green-500"
                icon={FaUser}
              />
            </div>
          </div>

          {clients ? (
            <ClientTable
              title="Add Client"
              data={clients}
              modalContent={<ClientForm />}
            />
          ) : (
            <>There are no clients available</>
          )}
        </div>
      </Dashtemplate>
    </div>
  );
};

export default Analytics;
