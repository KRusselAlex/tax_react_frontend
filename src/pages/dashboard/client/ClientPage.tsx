import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useClientStore } from "@/store/useClientStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, Send } from "lucide-react";
import { ClientType } from "@/types/Types";
import { toast } from "react-toastify";
import { FaBell } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import Dashtemplate from "@/components/dashboard/Dashtemplate";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import sendReport from "@/services/reportApi";
import { deleteClient, getClients, updateClient } from "@/services/clientApi";
import sendNotification from "@/services/notificationApi";

export interface ClientTypeHere {
  id: number;
  first_name: string;
  last_name: string;
  Street_address: string;
  city: string;
  province: string;
  postal_code: string;
  country: string;
  email: string;
  telephone_number: string;
  type_client: boolean;
  report_sent: boolean;
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

const ClientPage = () => {
  const { id } = useParams();
  const { setClients, getClientById, updateClientStore, deleteClientStore } =
    useClientStore();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false); // New state for Send modal
  const [reportFile, setReportFile] = useState<File | null>(null); // To store the uploaded PDF
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return "N/A"; // Handle null/undefined cases
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour12: false, // Use 24-hour format
    });
  };

  const client = getClientById(Number(id));
  const handleSendReport = async () => {
    if (client) {
      if (reportFile) {
        // Logic to upload or process the report file
        console.log("Report sent: ", reportFile);

        console.log(client.id, reportFile);

        try {
          const response = await sendReport({
            clients: client.id,
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
    }
  };

  useEffect(() => {
    if (!client) {
      navigate("/not-found");
    }
  }, [client, navigate]);

  const [formData, setFormData] = useState<ClientType | null>(null);

  useEffect(() => {
    if (client) {
      setFormData(client);
    }
  }, [client]);

  if (!formData) {
    return <div>Client not found</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (
    field: keyof ClientType,
    value: string | boolean
  ) => {
    setFormData({ ...formData, [field]: value });
  };

  const confirmDelete = async () => {
    if (client) {
      const response = await deleteClient(client.id);
      deleteClientStore(client.id);

      console.log(response);
      if (response.success == true) {
        console.log("je suis ici");
        const response = await getClients();
        setClients(response.data);
        toast.success("Client deleted successfully!");
        setIsDeleteModalOpen(false);
        navigate("/dashboard/clients");
      }
    }
  };

  const handleRemind = async () => {
    if (client) {
      try {
        const response = await sendNotification(client.id);
        if (response.success === true) {
          toast.success("Reminder sent successfully!"); // Success toast
        } else {
          toast.error("Failed to send reminder. Please try again."); // Error toast
        }
      } catch (error) {
        toast.error(
          "An error occurred while sending the reminder, check if the phone number is from canada and is correct ."
        );
        console.log(error); // Error toast
      }
    }
  };

  const handleUpdate = async () => {
    if (client) {
      setLoading(true);
      try {
        console.log("Updating client:", formData);
        if (client) {
          updateClientStore(client.id, formData);
        }
        const response = await updateClient(client.id, formData);
        // Handle the response if necessary
        if (response.success) {
          const response = await getClients();
          setClients(response.data);
          toast.success("Client updated successfully!");
        } else {
          toast.error("Failed to update client.");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error updating client:", error);
        toast.error("An error occurred while updating the client.");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
  };

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
    <Dashtemplate title={"CLIENT"} description="A Client information">
      <div className="flex flex-col justify-center items-center p-8">
        <div className="flex flex-col md:flex-row justify-center gap-4 md:justify-end items-center mb-4">
          <Button
            onClick={() => setIsSendModalOpen(true)}
            className="bg-green-500 text-white flex items-center gap-2"
          >
            <Send size={18} /> Send Report
          </Button>
          <Button
            onClick={handleRemind}
            className="bg-yellow-500 text-white flex items-center gap-2"
          >
            <FaBell size={18} /> Send Reminder
          </Button>
        </div>
        <Card className="w-full max-w-6xl border rounded-xl shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Client Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-4">
              {[
                "first_name",
                "last_name",
                "Street_address",
                "city",
                "province",
                "postal_code",
                "country",
                "email",
                "telephone_number",
              ].map((key) => (
                <div key={key}>
                  <Label className="capitalize">{key.replace(/_/g, " ")}</Label>
                  <Input
                    name={key}
                    value={String(formData[key as keyof ClientTypeHere] ?? "")}
                    onChange={handleChange}
                  />
                </div>
              ))}

              {/* Type Client Select Dropdown */}
              <div>
                <Label>Type Client</Label>
                <Select
                  value={formData.type_client ? "true" : "false"}
                  onValueChange={(value) => {
                    let vals = true;
                    if (value == "false") {
                      vals = false;
                    }
                    handleSelectChange("type_client", vals);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">Company</SelectItem>
                    <SelectItem value="false">Individual</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Report Sent Select Dropdown */}
              <div>
                <Label>Report Sent</Label>
                <Select
                  value={formData.report_sent ? "true" : "false"}
                  onValueChange={(value) => {
                    let vals = true;
                    if (value == "false") {
                      vals = false;
                    }
                    handleSelectChange("report_sent", vals);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">Yes</SelectItem>
                    <SelectItem value="false">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {["date_report_sent", "date_created", "date_updated"].map(
                (key) => (
                  <div key={key} className="">
                    <Label className="capitalize">
                      {key.replace(/_/g, " ")}
                    </Label>
                    <Input
                      name={key}
                      value={formatDate(
                        formData[key as keyof ClientType] as string
                      )}
                      disabled
                    />
                  </div>
                )
              )}
            </div>
            {/* Send Modal */}
            <Modal
              isOpen={isSendModalOpen}
              onClose={() => setIsSendModalOpen(false)}
            >
              <div>
                <h3 className="text-lg font-semibold mb-4">Send Report</h3>
                <label className="block mb-2 text-sm">
                  Upload Report (PDF):
                </label>
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

            <div className="flex justify-between mt-6">
              <Button
                onClick={handleUpdate}
                className="bg-buttonColor text-white"
              >
                Update Client
              </Button>
              <Button
                onClick={() => setIsDeleteModalOpen(true)}
                className="bg-red-500 text-white flex items-center gap-2"
              >
                <Trash2 size={18} /> Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Dashtemplate>
  );
};

export default ClientPage;
