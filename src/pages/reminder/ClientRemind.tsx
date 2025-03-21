import Dashtemplate from "../../components/dashboard/Dashtemplate";
import ClientTable from "../../components/TableData";
import ClientForm from "../../components/client/AddClient";
import { useClientStore } from "@/store/useClientStore";

const ClientRemind = () => {
  const { getClientsWithPendingReports } = useClientStore();

  const clients = getClientsWithPendingReports();

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
