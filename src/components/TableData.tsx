import { JSX, useState } from "react";
import { FiFilter, FiArchive, FiTrash, FiSend } from "react-icons/fi";
import { Dialog } from "@headlessui/react";
import { HiDotsVertical } from "react-icons/hi";
import sendReport from "../services/reportApi";
import { toast } from "react-toastify";
import { deleteClient, updateClient } from "../services/clientApi";

interface Client {
  id: number;
  full_name: string;
  email: string;
  telephone_number: string;
}

interface ClientTableProps {
  title: string;
  data: Client[]; // Corrected type definition
  modalContent: JSX.Element;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const clientDatas = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "+123456789",
  lastReport: "2025-03-10", // Last report date
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {children}
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default function ClientTable({
  title,
  data,
  modalContent,
}: ClientTableProps) {
  const [clients, setClients] = useState<Client[]>(data); // Updated state type
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedClients, setSelectedClients] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [clientToDelete, setClientToDelete] = useState<number | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false); // New state for Send modal
  const [reportFile, setReportFile] = useState<File | null>(null); // To store the uploaded PDF
  const itemsPerPage = 8;
  const [uniqueClient, setUniqueClient] = useState(0);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const handleSort = () => {
    setClients(
      [...clients].sort((a, b) =>
        sortOrder === "asc" ? a.id - b.id : b.id - a.id
      )
    );
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleSelect = (id: number) => {
    setSelectedClients((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleViewModal = (id: number) => {
    setClientToDelete(id);
    setIsViewModalOpen(true);
  };

  const handleSelectAll = () => {
    if (selectedClients.length === clients.length) {
      setSelectedClients([]);
    } else {
      setSelectedClients(clients.map((client) => client.id));
    }
  };

  const handleDelete = (id: number) => {
    setClientToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (clientToDelete !== null) {
      setClients(clients?.filter((client) => client.id !== clientToDelete));
      const response = await deleteClient(clientToDelete);
      console.log(response);
      if (response.success == true) {
        console.log("je suis ici");
        toast.success("Client deleted successfully!");
        setIsDeleteModalOpen(false);
        setClientToDelete(null);
      }
    }
  };

  const handleEdit = async (id: number, key: string, value: string) => {
    // Update the client state locally by mapping over the clients and updating the specific client
    const updatedClients = clients.map((client) =>
      client.id === id ? { ...client, [key]: value } : client
    );

    // Set the updated clients state
    setClients(updatedClients);

    // Find the updated client
    const updatedClient = updatedClients.find((client) => client.id === id);

    if (updatedClient) {
      // Clear the previous timeout if one exists
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }

      // Set a new timeout to trigger after 500ms (you can adjust the debounce time)
      const timeout = setTimeout(async () => {
        try {
          // Send the updated client data to the backend via the updateClient function
          const response = await updateClient(updatedClient.id, updatedClient);

          // Handle the response if necessary
          if (response.success) {
            toast.success("Client updated successfully!");
          } else {
            toast.error("Failed to update client.");
          }
        } catch (error) {
          console.error("Error updating client:", error);
          toast.error("An error occurred while updating the client.");
        }
      }, 3000); // Adjust the delay (in ms) to suit your needs

      // Save the timeout reference
      setTypingTimeout(timeout);
    }
  };

  const filteredClients = clients.filter((c) =>
    Object.values(c).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSendModalOpen = (id: number) => {
    setUniqueClient(id);
    setIsSendModalOpen(true); // Open the Send modal
  };

  const handleSendReport = async () => {
    if (reportFile) {
      // Logic to upload or process the report file
      console.log("Report sent: ", reportFile);

      console.log(uniqueClient, reportFile);

      try {
        const response = await sendReport({
          clients: uniqueClient,
          file: reportFile,
        });

        if (response.success === true) {
          toast.success("Report sent successfully!"); // Success toast
        } else {
          toast.error("Failed to send report. Please try again."); // Error toast
        }
      } catch (error) {
        toast.error("An error occurred while sending the report.");
        console.log(error); // Error toast
      }
      setIsSendModalOpen(false); // Close the modal after sending
    } else {
      toast.error("Please upload a report file."); // Error toast if no file is uploaded
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-between py-4">
        <input
          className="border pl-4 pr-10 py-2 rounded-full w-72 focus:ring-gray-300 "
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />

        <div className="flex space-x-4">
          <button className="p-2" onClick={handleSort}>
            <FiFilter size={20} />
          </button>
          <button className="p-2">
            <FiArchive size={20} />
          </button>
          <button
            className="px-4 py-2 bg-buttonColor text-white rounded-full"
            onClick={() => setIsModalOpen(true)}
          >
            {title}
          </button>
        </div>
      </div>
      <div className="border rounded-xl bg-white p-4 ">
        <table className="w-full mt-4 overflow-hidden ">
          <thead className="border-b">
            <tr>
              <th className="p-2  border-gray-300 text-sm uppercase">
                <input
                  type="checkbox"
                  checked={selectedClients.length === clients.length}
                  onChange={handleSelectAll}
                />
              </th>
              {Object.keys(data[0])
                .filter((key) => key !== "id")
                .map((key) => (
                  <th
                    key={key}
                    className="p-2 text-left uppercase font-normal text-sm text-gray-900 border-gray-300"
                  >
                    {key}
                  </th>
                ))}
              <th className="p-2 uppercase text-left font-normal   text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedClients.map((client) => (
              <tr key={client.id} className="border-b border-gray-300">
                <td className="p-2 text-center border-gray-300">
                  <input
                    type="checkbox"
                    checked={selectedClients.includes(client.id)}
                    onChange={() => handleSelect(client.id)}
                  />
                </td>
                {Object.keys(client)
                  .filter((key) => key !== "id")
                  .map((key) => (
                    <td key={key} className="p-2 border-gray-300">
                      <input
                        type="text"
                        value={client[key as keyof Client]}
                        onChange={(e) =>
                          handleEdit(client.id, key, e.target.value)
                        }
                        className="w-full px-2 py-2 text-sm text-gray-900 border rounded focus:ring-1 focus:ring-[#cedfe9]"
                      />
                    </td>
                  ))}
                <td className="p-2 flex justify-center h-full mt-2 items-center space-x-2">
                  <button
                    className="text-buttonHover hover:text-third"
                    onClick={() => handleViewModal(client.id)}
                  >
                    <HiDotsVertical size={20} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(client.id)}
                  >
                    <FiTrash size={20} />
                  </button>
                  <button
                    className="text-green-500 hover:text-green-700"
                    onClick={() => handleSendModalOpen(client.id)}
                  >
                    <FiSend size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center mt-4 space-x-2">
          {[
            ...Array(Math.ceil(filteredClients.length / itemsPerPage)).keys(),
          ].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === page + 1
                  ? "bg-primary text-white"
                  : "bg-gray-300"
              }`}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Send Modal */}
      <Modal isOpen={isSendModalOpen} onClose={() => setIsSendModalOpen(false)}>
        <div>
          <h3 className="text-lg font-semibold mb-4">Send Report</h3>
          <label className="block mb-2 text-sm">Upload Report (PDF):</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setReportFile(e.target.files?.[0] || null)}
            className="border p-2 rounded w-full mb-4"
          />
          <button
            onClick={handleSendReport}
            className="px-4 py-2 bg-buttonColor text-white rounded-full"
          >
            Send Report
          </button>
        </div>
      </Modal>

      {/* Delete Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <div>
          <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
          <p>Are you sure you want to delete this client?</p>
          <button
            onClick={confirmDelete}
            className="px-4 py-2 mt-2 bg-red-600 text-white rounded-full"
          >
            Delete
          </button>
        </div>
      </Modal>

      {/* Main Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent}
      </Modal>

      <Modal isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)}>
        <div className="  flex justify-center items-center ">
          <div className="bg-white p-6 rounded-lg w-96 ">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsViewModalOpen(false)}
            >
              X
            </button>
            <h2 className="text-2xl font-semibold mb-4">Client Information</h2>
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {clientDatas.name}
              </p>
              <p>
                <strong>Email:</strong> {clientDatas.email}
              </p>
              <p>
                <strong>Phone:</strong> {clientDatas.phone}
              </p>
              <p>
                <strong>Last Report Sent:</strong> {clientDatas.lastReport}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
