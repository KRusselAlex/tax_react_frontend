import { Bell, LogOut } from "lucide-react";
// import Avatar from "../assets/1.jpeg";

interface DashboardNavbarProps {
  title: string;
  description: string;
}

export default function DashboardNavbar({
  title,
  description,
}: DashboardNavbarProps) {
  return (
    <nav className="flex items-center p-4 justify-between">
      <div>
        <h1 className="text-3xl ">{title}</h1>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex items-center gap-4">
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900" />
        <img src="./" />
        <LogOut className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-700" />
      </div>
    </nav>
  );
}
