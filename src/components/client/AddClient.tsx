import { useState } from "react";
import Papa from "papaparse"; // for parsing CSV files
import { createClients } from "../../services/clientApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type Client = {
  full_name: string;
  email: string;
  telephone_number: string;
  type_client: boolean;
};

type CSVRow = {
  [key: string]: string | number;
};

const ClientForm = () => {
  const [isManualEntry, setIsManualEntry] = useState<boolean>(true); // Toggle between manual entry and Excel upload
  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [clientType, setClientType] = useState<boolean>(false);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [csvData, setCsvData] = useState<CSVRow[]>([]);
  const [isCsvParsed, setIsCsvParsed] = useState<boolean>(false); // State to track if CSV is parsed
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setCsvFile(e.target.files[0]);
    }
  };

  const handleClientTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setClientType(value === "1"); // true if "Company" is selected, false if "individual" is selected
  };

  const handleCsvUpload = (): void => {
    if (csvFile) {
      Papa.parse(csvFile, {
        complete: async (result: { data: CSVRow[] }) => {
          setCsvData(result.data as CSVRow[]); // Save the parsed CSV data
          setIsCsvParsed(true); // Mark that CSV is parsed
          console.log("CSV Data Parsed:", result.data);
        },
        header: true,
        skipEmptyLines: true,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (isManualEntry) {
      // Manual entry submission logic
      const newClient: Client = {
        full_name: clientName,
        email: clientEmail,
        telephone_number: clientPhone,
        type_client: clientType,
      };
      console.log("Adding client:", newClient);
      const response = await createClients(newClient);
      if (response.success) {
        console.log("created");
        toast.success("Client added successfully!");
      }

      // Add your logic to send this data to the API
    } else {
      // CSV data submission logic
      console.log("Uploading CSV data:", csvData);
      // Add your logic to send this CSV data to the API

      const formattedData = csvData.map((row) => ({
        full_name: String(row.name), // Convert to string
        email: String(row.email), // Convert to string
        telephone_number: String(row.phone),
        type_client: row.type_client ? Boolean(row.type_client) : false, // Assuming phone is already a string
      }));

      const response = await createClients(formattedData);
      if (response.success) {
        console.log("created");
        toast.success("Client added successfully!");
        navigate("/dashboard/client");
      }
    }
  };

  return (
    <div className="p-6 bg-white  rounded-xl">
      <h2 className="text-lg font-bold">
        {isManualEntry ? "Add New Client" : "Upload Clients via Excel"}
      </h2>
      <form onSubmit={handleSubmit}>
        {isManualEntry ? (
          <>
            <div className="max-w-md">
              <input
                type="text"
                placeholder="Client Name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="border p-2 w-full my-2 rounded-lg"
              />
              <input
                type="email"
                placeholder="Client Email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="border p-2 w-full my-2 rounded-lg"
              />
              <select
                name="type"
                id=""
                onChange={handleClientTypeChange}
                className="border p-2 w-full my-2 rounded-lg"
              >
                <option value="0">individual</option>
                <option value="1">Company</option>
              </select>
              <input
                type="text"
                placeholder="Phone Number"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="border p-2 w-full my-2 rounded-lg"
              />
            </div>
          </>
        ) : (
          <>
            <input
              type="file"
              accept=".csv,.xlsx"
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
            <table className="w-full border mt-2">
              <thead className="bg-gray-200">
                <tr>
                  {Object.keys(csvData[0]).map((key) => (
                    <th key={key} className="p-2 border">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {csvData.map((row, idx) => (
                  <tr key={idx}>
                    {Object.values(row).map((value, index) => (
                      <td key={index} className="p-2 border">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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
