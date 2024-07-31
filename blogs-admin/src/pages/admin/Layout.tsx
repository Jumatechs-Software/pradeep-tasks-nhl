import { Outlet } from "react-router-dom";
import LeftMenuBar from "../../components/LeftMenuBar";
import TopNavBar from "../../components/TopNavBar";
import { Toaster } from "@/components/ui/toaster";

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
