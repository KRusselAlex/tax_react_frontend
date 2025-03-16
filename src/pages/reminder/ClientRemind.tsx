import Dashtemplate from "../../components/dashboard/Dashtemplate";
import ClientTable from "../../components/TableData";
import ClientForm from "../../components/client/AddClient";

const ClientRemind = () => {
  const sampleClients = [
    {
      id: 1,
      full_name: "John Doe",
      email: "john@example.com",
      telephone_number: "123-456-7890",
    },
    {
      id: 2,
      full_name: "Jane Smith",
      email: "jane@example.com",
      telephone_number: "987-654-3210",
    },
    {
      id: 3,
      full_name: "Mike Johnson",
      email: "mike@example.com",
      telephone_number: "456-789-1234",
    },
    {
      id: 4,
      full_name: "Mike Johnson",
      email: "mike@example.com",
      telephone_number: "456-789-1234",
    },
    {
      id: 5,
      full_name: "Mike Johnson",
      email: "mike@example.com",
      telephone_number: "456-789-1234",
    },
    {
      id: 6,
      full_name: "Mike Johnson",
      email: "mike@example.com",
      telephone_number: "456-789-1234",
    },
    {
      id: 7,
      full_name: "Mike Johnson",
      email: "mike@example.com",
      telephone_number: "456-789-1234",
    },
    {
      id: 8,
      full_name: "Mike Johnson",
      email: "mike@example.com",
      telephone_number: "123-456-7890",
    },
  ];

  return (
    <div>
      <Dashtemplate
        title="Clients To Remind"
        description="Aperçu des statistiques et performances"
      >
        <ClientTable
          title="Add Client"
          data={sampleClients}
          modalContent={<ClientForm />}
        />
      </Dashtemplate>
    </div>
  );
};

export default ClientRemind;
