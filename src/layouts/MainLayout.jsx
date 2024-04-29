import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar";
import Footer from "../pages/Home/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="h-16">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
