import { Outlet } from "react-router";
import Footer from "../components/footer";
import { Navbar } from "../components/Navbar";

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
