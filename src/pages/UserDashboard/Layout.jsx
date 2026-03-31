/**
 * @desc This displays the fundamental layout structure for the User dashboard
 */

import { Outlet } from "react-router-dom";
import AsideBar from "../../components/User/AsideBar";
import Navbar from "../../components/User/Navbar";

const Layout = () => {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex justify-center w-64 p-4 flex-col bg-brand rounded-r-full">
        <AsideBar />
      </aside>

      {/* Right side */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="h-16 border-b border-gray-100 rounded-full flex items-center justify-between">
          <Navbar />
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
