import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Users, FileText, Settings, Link } from "lucide-react";
import Dashtemplate from "../../../components/dashboard/Dashtemplate";

const tabs = [
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "users", label: "Utilisateurs", icon: Users },
  { id: "reports", label: "Rapports", icon: FileText },
  { id: "general", label: "Général", icon: Settings },
  { id: "integrations", label: "Intégrations", icon: Link },
];

export default function Setting() {
  const [activeTab, setActiveTab] = useState("notifications");
  const [settings, setSettings] = useState({
    emailTemplate: "Votre rappel d'impôt est dû bientôt.",
    smsTemplate: "N'oubliez pas de soumettre votre déclaration fiscale.",
    reminderDays: 7,
    reportFrequency: "Mensuel",
    timezone: "UTC",
    companyName: "Entreprise X",
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  return (
    <Dashtemplate
      title={"Setting"}
      description={"How to setup 404 page in React"}
    >
      <div className=" min-h-screen max-w-6xl  p-6 mx-auto ">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 p-4  border-b md:gap-5 ">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeTab === tab.id
                  ? "bg-buttonColor text-white shadow-md"
                  : "bg-gray-200 text-gray-600 hover:bg-buttonHover hover:text-white"
              }`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon size={18} className="mr-2" /> {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          className="p-6 mt-6 bg-white rounded-lg border"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "notifications" && (
            <>
              <h2 className="mb-4 text-lg font-bold text-gray-700">
                Paramètres des Notifications
              </h2>
              <label className="block mb-1 text-sm font-semibold">
                Modèle d'Email
              </label>
              <textarea
                name="emailTemplate"
                value={settings.emailTemplate}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
              />
              <label className="block mb-1 text-sm font-semibold">
                Modèle de SMS
              </label>
              <textarea
                name="smsTemplate"
                value={settings.smsTemplate}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
              />
              <label className="block mb-1 text-sm font-semibold">
                Délai de rappel (jours avant échéance)
              </label>
              <input
                type="number"
                name="reminderDays"
                value={settings.reminderDays}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </>
          )}

          {activeTab === "users" && (
            <div>
              <h2 className="mb-4 text-lg font-bold text-gray-700">
                Gestion des Utilisateurs
              </h2>
              <p className="text-gray-600">
                Ajoutez ou supprimez des administrateurs ici.
              </p>
            </div>
          )}

          {activeTab === "reports" && (
            <>
              <h2 className="mb-4 text-lg font-bold text-gray-700">
                Paramètres des Rapports
              </h2>
              <label className="block mb-1 text-sm font-semibold">
                Fréquence des rapports
              </label>
              <select
                name="reportFrequency"
                value={settings.reportFrequency}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="Quotidien">Quotidien</option>
                <option value="Hebdomadaire">Hebdomadaire</option>
                <option value="Mensuel">Mensuel</option>
              </select>
            </>
          )}

          {activeTab === "general" && (
            <>
              <h2 className="mb-4 text-lg font-bold text-gray-700">
                Paramètres Généraux
              </h2>
              <label className="block mb-1 text-sm font-semibold">
                Nom de l'entreprise
              </label>
              <input
                type="text"
                name="companyName"
                value={settings.companyName}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
              />
              <label className="block mb-1 text-sm font-semibold">
                Fuseau horaire
              </label>
              <input
                type="text"
                name="timezone"
                value={settings.timezone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </>
          )}

          {activeTab === "integrations" && (
            <div>
              <h2 className="mb-4 text-lg font-bold text-gray-700">
                Intégrations
              </h2>
              <p className="text-gray-600">
                Connectez votre projet avec des services externes comme Gmail
                API et Twilio.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </Dashtemplate>
  );
}
