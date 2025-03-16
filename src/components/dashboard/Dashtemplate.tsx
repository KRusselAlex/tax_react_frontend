import React, { ReactNode } from 'react';
import Sidebar from '../SideBar';
import DashboardNavbar from "../NavDash";

interface DashtemplateProps {
  children: ReactNode;
  title: string;
  description: string;
}

const Dashtemplate: React.FC<DashtemplateProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className="flex min-h-screen bg-[#3d6d8c] ">
      <Sidebar />
      <div className="flex-1 flex flex-col px-2 md:px-8 py-2 rounded-l-2xl bg-secondaryColor">
        <DashboardNavbar title={title} description={description} />
        <main className="flex-1  ">{children}</main>
      </div>
    </div>
  );
};

export default Dashtemplate;
