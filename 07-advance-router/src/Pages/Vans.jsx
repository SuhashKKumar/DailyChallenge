import { Link } from "react-router-dom";
import VanOptions from "../Components/VanOptions";
import "../styles/Vans.css";
import { useState, useEffect } from "react";
const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((res) => setVans(res.vans))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="vans-container">
      <div className="vans-sub-container">
        <h1 className="headline">Explore our van options</h1>
        <div className="van-filter-items">
          <p className="filter-item second-bg">Simple</p>
          <p className="filter-item second-bg">Luxury</p>
          <p className="filter-item second-bg">Rugged</p>
          <p className="clear-filter ">Clear filters</p>
        </div>
      </div>
      <div className="for-center">
        <div className="vans-list-grid-container">
          {vans.map(({ id, imageUrl, name, price, type }) => {
            return (
              <Link to={`/vans/${id}`} className="vans-layout" key={id}>
                <img
                  src={imageUrl}
                  alt={`picture of ${name} van`}
                  width={300}
                  height={300}
                />
                <div className="van-details-container">
                  <div className="van-model-price">
                    <h3>{name}</h3>
                    <h3>
                      ${price}
                      <span>/day</span>
                    </h3>
                  </div>
                 <VanOptions type={type} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Vans;
