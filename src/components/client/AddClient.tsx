import { useState } from "react";
import Papa from "papaparse";
import { createClients, getClients } from "../../services/clientApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ClientTypeCreate } from "@/types/Types";
import { useClientStore } from "@/store/useClientStore";
import { motion } from "framer-motion";

type CSVRow = {
  [key: string]: string | number;
};

const ClientForm = () => {
  const [isManualEntry, setIsManualEntry] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);

  const { setClients } = useClientStore();
  const [client, setClient] = useState<ClientTypeCreate>({
    first_name: "",
    last_name: "",
    Street_address: "",
    city: "",
    province: "",
    postal_code: "",
    country: "Canada",
    email: "",
    telephone_number: "",
    type_client: false,
  });
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [csvData, setCsvData] = useState<CSVRow[]>([]);
  const [isCsvParsed, setIsCsvParsed] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setClient((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setCsvFile(e.target.files[0]);
    }
  };

  const handleCsvUpload = (): void => {
    if (csvFile) {
      Papa.parse(csvFile, {
        complete: async (result: { data: CSVRow[] }) => {
          console.log("Parsed CSV Data:", result.data); // Add logging to see the raw CSV data
          setCsvData(result.data as CSVRow[]);
          setIsCsvParsed(true);
        },
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true, // Enable dynamic typing to convert numbers correctly
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      setLoading(true);
      if (isManualEntry) {
        console.log("client", client);
        const response = await createClients(client);
        if (response.success) {
        
          navigate("/dashboard/client");
          toast.success("Client added successfully!");
        }
      } else {
        // Log the csv data to ensure it's correct
        console.log("Formatted CSV Data:", csvData);

        const formattedData = csvData.map((row) => ({
          first_name: String(row.first_name),
          last_name: String(row.last_name),
          Street_address: String(row.Street_address),
          city: String(row.city),
          province: String(row.province),
          postal_code: String(row.postal_code),
          country: String(row.country),
          email: String(row.email),
          telephone_number: String(row.telephone_number),
          type_client: row.type_client ? Boolean(row.type_client) : false,
        }));
        console.log("data csv", formattedData);

        const response = await createClients(formattedData);
        if (response.success) {
          toast.success("Clients uploaded successfully!");
          // navigate("/dashboard/client");
        }
      }
    } catch (error) {
      toast.error("Failed to create user. Please try again.");
      setLoading(false);
      console.log(error);
    } finally {
        const response = await getClients();
        setClients(response.data);s
        setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50">
        <div className=" p-6 w-80 rounded-lg shadow-lg">
          <div className="flex justify-center items-center">
            <motion.div
              className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-xl w-full md:w-[600px] mx-auto">
      <h2 className="text-lg font-bold w-full">
        {isManualEntry ? "Add New Client" : "Upload Clients via Excel"}
      </h2>
      <form onSubmit={handleSubmit} className="w-full">
        {isManualEntry ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {Object.keys(client).map((key) => {
              if (key === "type_client") {
                return (
                  <div key={key} className="w-full">
                    <select
                      name={key}
                      value={client[key as keyof ClientType] as boolean}
                      onChange={handleChange}
                      className="border p-2 w-full my-2 rounded-lg"
                    >
                      <option value={false}>Individual</option>
                      <option value={true}>Company</option>
                    </select>
                  </div>
                );
              }
              return (
                <div key={key} className="w-full">
                  <input
                    type={key === "email" ? "email" : "text"}
                    name={key}
                    placeholder={key.replace("_", " ")}
                    value={client[key as keyof ClientType] as string}
                    onChange={handleChange}
                    className="border p-2 w-full my-2 rounded-lg"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="border p-2 w-full my-2"
            />
            <button
              type="button"
              onClick={handleCsvUpload}
              className="mt-4 px-4 py-2 bg-buttonColor text-white rounded-full"
            >
              Upload Excel/CSV
            </button>
          </>
        )}
        {isCsvParsed && csvData.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">CSV Data Preview</h3>

            <div className="overflow-x-auto max-h-[500px] border rounded-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {csvData.length > 0 &&
                      Object.keys(csvData[0]).map((key, index) => (
                        <th key={index} className="p-2 border bg-gray-100">
                          {key.replace(/_/g, " ")}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {csvData.map((row, idx) => (
                    <tr key={idx}>
                      {Object.entries(row).map(([key, value], index) => (
                        <td key={index} className="p-2 border">
                          {key === "type_client"
                            ? (typeof value === "string" &&
                                value.toLowerCase() === "true") ||
                              (typeof value === "boolean" && value === true)
                              ? "Company"
                              : "Individual"
                            : value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        <div className="flex space-x-4 mt-4">
          <button
            type="button"
            onClick={() => setIsManualEntry(!isManualEntry)}
            className="px-4 py-2 bg-gray-300 text-black hover:bg-buttonHover hover:text-white rounded-full"
          >
            {isManualEntry
              ? "Switch to Excel Upload"
              : "Switch to Manual Entry"}
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-buttonColor hover:bg-buttonHover hover:text-white text-white rounded-full"
          >
            {isManualEntry ? "Add Client" : "Upload Clients"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
