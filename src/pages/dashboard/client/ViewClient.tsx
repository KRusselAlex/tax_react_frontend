import Dashtemplate from "../../../components/dashboard/Dashtemplate";
import ClientTable from "../../../components/TableData";
import ClientForm from "../../../components/client/AddClient";
import { useClientStore } from "@/store/useClientStore";

const ViewClient = () => {
  const { clients } = useClientStore();

  return (
    <div>
      <Dashtemplate
        title="Manage Clients"
        description="Overview of clients and their information"
      >
        {clients ? (
          <ClientTable
            title="Add Client"
            data={clients}
            modalContent={<ClientForm />}
          />
        ) : (
          <>There are no clients available</>
        )}
      </Dashtemplate>
    </div>
  );
};

export default ViewClient;
