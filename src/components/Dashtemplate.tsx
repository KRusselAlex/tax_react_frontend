import React, { ReactNode } from 'react';
import Sidebar from './SideBar';
import DashboardNavbar from "./NavDash";

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
    <div className="flex bg-secondaryColor min-h-screen h-full ">
      <Sidebar />
      <div className="flex-1 h-full">
        <DashboardNavbar title={title} description={description} />
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default Dashtemplate;
