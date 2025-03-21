import Dashtemplate from "../../components/dashboard/Dashtemplate";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { FaUserPlus, FaEnvelope, FaChartLine, FaFileAlt } from "react-icons/fa";
import { PieChart } from "@mui/x-charts/PieChart";
import Card from "../../components/Card";
import { useClientStore } from "@/store/useClientStore";

const Analytics = () => {
  const { clients, getClientsByType } = useClientStore();
  const companies = getClientsByType(true);
  const individuals = getClientsByType(false);

  return (
    <div>
      <Dashtemplate
        title="Dashboard"
        description="Aperçu des statistiques et performances"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mb-4  ">
            <div className="p-4 border rounded-xl bg-white">
              <p className="text-lg font-medium text-primary mb-2 ">
                Tendance des Rappels
              </p>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]}
                series={[{ data: [10, 20, 30, 50, 40, 60] }]}
                width={500}
                height={300}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Card
                title="Clients Total"
                number={clients?.length}
                icon={FaUserPlus}
              />
              <Card title="Rappels Envoyés" number={85} icon={FaEnvelope} />
              <Card
                title="Derniers Rapports"
                number={32}
                color="text-yellow-500"
                icon={FaFileAlt}
              />
              <Card
                title="Croissance"
                number={12}
                color="text-green-500"
                icon={FaChartLine}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-xl bg-white">
              <p className="text-lg font-medium text-primary mb-2">
                Évolution des Clients
              </p>
              <BarChart
                series={[{ data: [50, 75, 100, 120] }]}
                height={300}
                xAxis={[
                  { data: ["Jan", "Fév", "Mar", "Avr"], scaleType: "band" },
                ]}
              />
            </div>
            <div className="p-4 border rounded-xl bg-white">
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
          </div>
        </div>
      </Dashtemplate>
    </div>
  );
};

export default Analytics;
