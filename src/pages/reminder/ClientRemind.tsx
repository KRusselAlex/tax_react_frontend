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
        title="Remind Clients"
        description="Clients who have not received reports"
      >
        {clients ? (
          <ClientTable
            title="Add Client"
            data={clients}
            modalContent={<ClientForm />}
          />
        ) : (
          <>There are no clients</>
        )}
      </Dashtemplate>
    </div>
  );
};

export default ClientRemind;
