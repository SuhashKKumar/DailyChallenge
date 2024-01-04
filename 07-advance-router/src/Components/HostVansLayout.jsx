import { Link, Outlet } from "react-router-dom";
import HostVanInfo from "../Pages/HostVanInfo";
import '../styles/HostVansLayout.css'

const HostVansLayout = () => {
  return (
    <>
      <Link to=".." relative="path">
        <u>← Back to all vans</u>
      </Link>
      <div className="white-bg host-vans-layout-container " >
      <HostVanInfo />
      <Outlet />
      </div>
    </>
  );
};

export default HostVansLayout;
