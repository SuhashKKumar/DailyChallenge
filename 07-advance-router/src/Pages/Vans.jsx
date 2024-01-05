import { Link, useSearchParams } from "react-router-dom";
import VanOptions from "../Components/VanOptions";
import "../styles/Vans.css";
import { useState, useEffect } from "react";
const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log(typeFilter, "search paras");

  const [vans, setVans] = useState([]);
  // const [filteredVans, setFilteredVans] = useState(vans);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((res) => setVans(res.vans))
      .catch((error) => console.log(error));
  }, []);
  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  console.log(filteredVans, "vans", vans);
  return (
    <div className="vans-container">
      <div className="vans-sub-container">
        <h1 className="headline">Explore our van options</h1>
        <div className="van-filter-items">
          <p
            onClick={() => setSearchParams({ type: "simple" })}
            className="filter-item simple"
          >
            Simple
          </p>
          <p
            onClick={() => setSearchParams({ type: "luxury" })}
            className="filter-item luxury"
          >
            Luxury
          </p>
          <p
            onClick={() => setSearchParams({ type: "rugged" })}
            className="filter-item rugged"
          >
            Rugged
          </p>
          <p onClick={() => setSearchParams({})} className="clear-filter ">
            Clear filters
          </p>
        </div>
      </div>
      <div className="for-center">
        <div className="vans-list-grid-container">
          {filteredVans.map(({ id, imageUrl, name, price, type }) => {
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
