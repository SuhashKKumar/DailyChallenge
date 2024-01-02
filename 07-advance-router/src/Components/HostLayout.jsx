import { Outlet } from "react-router-dom";
import HostNavbar from "./HostNavbar";

const HostLayout = () => {
  console.log(Outlet);
  return (
    <>
      <HostNavbar />
      <Outlet />
    </>
  );
};

export default HostLayout;
