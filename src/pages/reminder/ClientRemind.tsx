import Dashtemplate from "../../components/dashboard/Dashtemplate";
import ClientTable from "../../components/TableData";
import ClientForm from "../../components/client/AddClient";

const ClientRemind = () => {
  const sampleClients = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      phones: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      phones: "123-456-7890",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "456-789-1234",
      phones: "123-456-7890",
    },
    {
      id: 4,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "456-789-1234",
      phones: "123-456-7890",
    },
    {
      id: 5,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "456-789-1234",
      phones: "123-456-7890",
    },
    {
      id: 6,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "456-789-1234",
      phones: "123-456-7890",
    },
    {
      id: 7,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "456-789-1234",
      phones: "123-456-7890",
    },
    {
      id: 8,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "456-789-1234",
      phones: "123-456-7890",
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
