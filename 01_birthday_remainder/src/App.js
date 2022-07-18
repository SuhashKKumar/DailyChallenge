import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

function App() {
  const date = new Date().getDate();
  const month = new Date().getMonth();

  const currentYear = new Date().getFullYear();

  const addingZeros = (type) => {
    return type < 10 ? `0${type}` : `${type}`;
  };
  // let birthdayMonthAndDay = `${addingZeros(month+1)}${addingZeros(date)} `;
  let birthdayMonthAndDay = "0325";
  // let birthdayMonthAndDay = "0711";

  const [birthdays, setBirthdays] = useState([]);
  

  const options = {
    method: "GET",
    url: "https://celebrity-by-api-ninjas.p.rapidapi.com/v1/celebrity",
    params: { min_height: "0.5" },
    headers: {
      "X-RapidAPI-Key": "f9ea28c5ebmshb1890e7293d2cb1p1727cfjsn43fc844725c9",
      "X-RapidAPI-Host": "celebrity-by-api-ninjas.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setBirthdays(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const clickHandler = () => {
    return setBirthdays([]);
  };
  return (
    <div className="App  ">
      <h1>Birthday Remainder</h1>
      <div className="birthday_container">
        <h2>
          {date}/{month + 1}/{currentYear}
        </h2>
        {birthdays.map((birth, index) => {
          if (
            birth?.birthday
              ?.replaceAll("-", "")
              .includes(birthdayMonthAndDay.toString())
          ) {
            return (
              <div
                key={index}
                className="d-flex flex-column gap-1 align-middle "
              >
                <div className="birthday_card d-flex gap-5 mt-2 mx-3">
                  <div className="pe-5">
                    {birth.gender === "female" ? (
                      <FcBusinesswoman
                        size="5.3em"
                        style={{
                          backgroundColor: "White",
                          borderRadius: "50%",
                          padding: "0.2rem",
                          border: "4px solid #de3a35",
                        }}
                      />
                    ) : (
                      <FcBusinessman
                        size="5.3em"
                        style={{
                          backgroundColor: "White",
                          borderRadius: "50%",
                          padding: "0.2rem",
                          border: "4px solid #de3a35",
                        }}
                      />
                    )}
                  </div>
                  <div className="ps-5">
                    <h3>{birth.name}</h3>
                    <h3>Age: {birth.age}</h3>
                  </div>
                </div>
                <button className="my-4" onClick={clickHandler}>
                  Clear All
                </button>
              </div>
            );
          }
        })}
      </div>
      <footer className="mt-2 " >Made by SuhashKKumar on 17July 2022</footer>
    </div>
  );
}

export default App;
