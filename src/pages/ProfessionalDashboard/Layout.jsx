/**
 * @description Displays the layout structure for the Professional dashboard look
 */


import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex p-4 h-screen gap-4 w-full">
      {/** Sidebar */}
      <aside className="hidden md:flex w-64 bg-white/10 border-r p-4">Navlinks</aside>

      {/** Right side */}
      <div className="flex flex-col gap-4 flex-1">
        {/** Header */}
        <header className="p-4 border-b">top of dashboard</header>
        {/** Main content */}
        <main className="p-4 flex grow bg-gray-50 overflow-y-auto text-black">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;