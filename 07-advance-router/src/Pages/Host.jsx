import { Link } from "react-router-dom";
// import HostNavbar from "../Components/HostNavbar";
import "../styles/Host.css";
import HostScoreCard from "../Components/HostScoreCard";
import HostCard from "../Components/HostCard";
const Host = () => {
  return (
    <div className="host-container">
      <HostCard dynamicStyle={'fourth-bg'}>
        <div className="host-inner-container">
          <h1 className="host-headline">Welcome!</h1>
          <p className="para">
            Income last
            <Link>
              <u> 30 days</u>
            </Link>
          </p>
          <h1 className="host-price">$1,304</h1>
        </div>
      </HostCard>
      <HostCard dynamicStyle={'second-bg'}>
        <HostScoreCard />
      </HostCard>
    </div>
  );
};

export default Host;
