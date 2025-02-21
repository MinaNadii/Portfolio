import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MasterLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar/Navbar */}
      <div className="lg:w-[20%]">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className=" lg:w-[80%] p-4 md:p-6 lg:p-8">
        <div className="mx-3 md:mx-5 lg:mx-7 xl:mx-10 mx-auto bg-sky-400 p-4 rounded-lg shadow-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;
