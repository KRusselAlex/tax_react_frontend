import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Users, FileText, Settings, Link } from "lucide-react";
import Dashtemplate from "../../../components/dashboard/Dashtemplate";

const tabs = [
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "users", label: "Users", icon: Users },
  { id: "reports", label: "Reports", icon: FileText },
  { id: "general", label: "General", icon: Settings },
  { id: "integrations", label: "Integrations", icon: Link },
];

export default function Setting() {
  const [activeTab, setActiveTab] = useState("notifications");
  const [settings, setSettings] = useState({
    emailTemplate: "Your tax reminder is due soon.",
    smsTemplate: "Don't forget to submit your tax return.",
    reminderDays: 7,
    reportFrequency: "Monthly",
    timezone: "UTC",
    companyName: "Company X",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  return (
    <Dashtemplate
      title={"Settings"}
      description={"Configuration of your application"}
    >
      <div className="min-h-screen max-w-6xl p-6 mx-auto">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 p-4 border-b md:gap-5">
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
                Notification Settings
              </h2>
              <label className="block mb-1 text-sm font-semibold">
                Email Template
              </label>
              <textarea
                name="emailTemplate"
                value={settings.emailTemplate}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
              />
              <label className="block mb-1 text-sm font-semibold">
                SMS Template
              </label>
              <textarea
                name="smsTemplate"
                value={settings.smsTemplate}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
              />
              <label className="block mb-1 text-sm font-semibold">
                Reminder Days (days before due date)
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
                User Management
              </h2>
              <p className="text-gray-600">
                Add or remove administrators here.
              </p>
            </div>
          )}

          {activeTab === "reports" && (
            <>
              <h2 className="mb-4 text-lg font-bold text-gray-700">
                Report Settings
              </h2>
              <label className="block mb-1 text-sm font-semibold">
                Report Frequency
              </label>
              <select
                name="reportFrequency"
                value={settings.reportFrequency}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </>
          )}

          {activeTab === "general" && (
            <>
              <h2 className="mb-4 text-lg font-bold text-gray-700">
                General Settings
              </h2>
              <label className="block mb-1 text-sm font-semibold">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={settings.companyName}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
              />
              <label className="block mb-1 text-sm font-semibold">
                Timezone
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
                Integrations
              </h2>
              <p className="text-gray-600">
                Connect your project with external services like Gmail API and
                Twilio.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </Dashtemplate>
  );
}
