import { JSX, useState } from "react";
import { FiFilter, FiArchive, FiTrash, FiSend } from "react-icons/fi";
import { Dialog } from "@headlessui/react";
import { HiDotsVertical } from "react-icons/hi";

interface ClientTableProps {
  title: string;
  data: Array<{ id: number; [key: string]: any }>;
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
  const [clients, setClients] = useState(data);
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

  const confirmDelete = () => {
    if (clientToDelete !== null) {
      setClients(clients.filter((client) => client.id !== clientToDelete));
      setIsDeleteModalOpen(false);
      setClientToDelete(null);
    }
  };

  const handleEdit = (id: number, key: string, value: string) => {
    setClients(
      clients.map((client) =>
        client.id === id ? { ...client, [key]: value } : client
      )
    );
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
    console.log(id);
    setIsSendModalOpen(true); // Open the Send modal
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setReportFile(e.target.files[0]); // Store the selected PDF file
    }
  };

  const handleSendReport = () => {
    if (reportFile) {
      // Logic to upload or process the report file
      console.log("Report sent: ", reportFile);
      setIsSendModalOpen(false); // Close the modal after sending
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
                        value={client[key]}
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
              className={`px-3 py-2 rounded ${
                currentPage === page + 1
                  ? "bg-blue-600 text-white"
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
            className="px-4 py-2 bg-red-600 text-white rounded"
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
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
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
