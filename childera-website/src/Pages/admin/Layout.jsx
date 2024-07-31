import LeftMenuBar from "../../Components/Admin/LeftMenuBar";
import TopNavBar from "../../Components/Admin/TopNavBar";
import { Toaster } from "../../Components/Admin/ui/toaster";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <main>
      <div className="flex min-w-full">
        <LeftMenuBar />
        <div className="w-full">
          <TopNavBar />
          <Outlet />
        </div>
      </div>
      <Toaster />
    </main>
  );
};

export default AdminLayout;
