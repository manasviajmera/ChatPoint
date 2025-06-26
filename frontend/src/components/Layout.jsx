import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, showSidebar = false }) => {
  return (
  <div className="h-full flex flex-col">
   <div className="h-full flex">
        {showSidebar && <Sidebar />}

     <div className="flex-1 flex flex-col bg-base-100">
          <Navbar />

          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};
export default Layout;