import React, { ReactNode } from 'react';
import Sidebar from './SideBar';

interface DashtemplateProps {
  children: ReactNode; // Define the children type as ReactNode
}

const Dashtemplate: React.FC<DashtemplateProps> = ({ children }) => {
  return (
    <div className="flex bg-secondary min-h-screen h-full p-6">
      <Sidebar />
      <main className="border-2 h-full rounded-lg flex-1 p-6">
        {children}
      </main>
    </div>
  );
};

export default Dashtemplate;
