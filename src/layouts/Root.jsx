import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet /> {/* Here the pages will load.*/}
      </div>
      <Footer />
    </div>
  );
};

export default Root;
