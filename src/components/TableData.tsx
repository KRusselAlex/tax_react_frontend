import { JSX, useState } from "react";
import { FiFilter, FiSend } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import { HiDotsVertical } from "react-icons/hi";
import sendReport from "../services/reportApi";
import { toast } from "react-toastify";
import { ClientType } from "../types/Types";
import { Link } from "react-router-dom";
import sendNotification from "@/services/notificationApi";

interface ClientTableProps {
  title: string;
  data: ClientType[];
  modalContent: JSX.Element;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

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
  const [clients, setClients] = useState<ClientType[]>(data); // Updated state type
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedClients, setSelectedClients] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false); // New state for Send modal
  const [reportFile, setReportFile] = useState<File | null>(null); // To store the uploaded PDF
  const itemsPerPage = 10;
  const [uniqueClient, setUniqueClient] = useState(0);

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

  const handleSelectAll = () => {
    if (selectedClients.length === clients.length) {
      setSelectedClients([]);
    } else {
      setSelectedClients(clients.map((client) => client.id));
    }
  };

  const handleRemind = async (id: number) => {
    console.log("the id ", id);
    try {
      const response = await sendNotification(id);
      if (response.success === true) {
        toast.success("Reminder sent successfully!"); // Success toast
      } else {
        toast.error("Failed to send reminder. Please try again."); // Error toast
      }
    } catch (error) {
      toast.error("An error occurred while sending the reminder.");
      console.log(error); // Error toast
    }
  };

  const filteredClients = clients?.filter((c) =>
    Object.values(c).some((value) =>
      String(value)?.toLowerCase().includes(search.toLowerCase())
    )
  );

  const paginatedClients = filteredClients?.slice(
    Math.max(0, (currentPage - 1) * itemsPerPage),
    Math.max(0, currentPage * itemsPerPage)
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
    <div className=" max-w-6xl mx-auto">
      <div className="flex items-center justify-between py-4  ">
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
          {/* <button className="p-2">
            <FiArchive size={20} />
          </button> */}
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
              <th className="p-2 border-gray-300 text-sm uppercase">
                <input
                  type="checkbox"
                  checked={selectedClients.length === clients.length}
                  onChange={handleSelectAll}
                />
              </th>
              {[
                "first_name",
                "last_name",
                "email",
                "telephone_number",
                "report_sent",
                "date_report_sent",
              ].map((key) => (
                <th
                  key={key}
                  className="p-2 text-left font-normal text-sm text-gray-900 border-gray-300"
                >
                  {key
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                </th>
              ))}

              <th className="p-2  text-left font-normal text-sm">Actions</th>
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
                {[
                  "first_name",
                  "last_name",
                  "email",
                  "telephone_number",
                  "report_sent",
                  "date_report_sent",
                ].map((key) => (
                  <td key={key} className="p-2 border-gray-300">
                    {key === "report_sent" ? (
                      <span
                        className={`px-3 py-1 text-white font-medium rounded ${
                          client.report_sent ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {client.report_sent ? "Yes" : "No"}
                      </span>
                    ) : key === "date_report_sent" ? (
                      client.date_report_sent == null ? (
                        "none"
                      ) : (
                        new Date(client.date_report_sent).toLocaleDateString()
                      )
                    ) : (
                      <span className="text-gray-900">
                        {String(client[key as keyof ClientType])}
                      </span>
                    )}
                  </td>
                ))}

                <td className="p-2 flex justify-center h-full mt-2 items-center space-x-2">
                  <Link
                    to={`/dashboard/client/${client.id}`}
                    className="text-buttonHover hover:text-third"
                  >
                    <HiDotsVertical size={20} />
                  </Link>
                  <button
                    className="text-yellow-500 hover:text-yellow-700"
                    onClick={() => handleRemind(client.id)}
                  >
                    <FaBell size={20} />
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
                  ? "bg-primaryColor text-white"
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

      {/* Main Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent}
      </Modal>
    </div>
  );
}
