import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
