/**
 * @description Displays the layout structure for the Professional dashboard look
 */

import { Outlet } from "react-router-dom";
import AsideBar from "../../components/Professional/AsideBar";
import TopBar from "../../components/Professional/TopBar";

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 p-4">
        <AsideBar />
      </aside>

      {/* Right side */}
      <div className="flex flex-col flex-1 p-4 overflow-hidden bg-gray-50">
        {/* Header */}
        <header className="shrink-0">
          <TopBar />
        </header>

        {/* Main content */}
        <main className="flex-1 w-full overflow-y-auto p-4 text-black">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
