import React, { useState } from "react";
import FarmerUsers from "./FarmerUsers";
import TravellerUsers from "./TravellerUsers";
import { timleyForecast } from "../serviceFiles/Data";
import "../styles/MainDashboard.css";
import sunCloud from "../assets/sunCloud.png";


const MainDashboard = () => {
  const [user, setUser] = useState("traveller");
  const handleUser = (value) => {
    setUser((prev) => (prev = value));
  };
  return (
    <div className="mainDashboard">
      <div className="topNav">
        <p>Choose your User </p>
        <button
          id={user === "traveller" && "travelFarmer"}
          onClick={() => handleUser("traveller")}
        >
          Traveller
        </button>
        <button
          id={user === "farmer" && "activeFarmer"}
          onClick={() => handleUser("farmer")}
        >
          Farmer
        </button>
        <button
          id={user === "event" && "eventFarmer"}
          onClick={() => handleUser("event")}
        >
          Event Planner
        </button>
        
      </div>
      <div>
        {user === "farmer" && <FarmerUsers />}
        {user === "traveller" && <TravellerUsers />}
        {user === "event" && (
          <div className="eventSection">
            <div className="currentCond">
              <h5>Current Conditions</h5>
              <img src={sunCloud} alt="Sun Cloud" />
              <p id="degreee">
                39 <sup>o</sup>C
              </p>
              <p id="clearSky">Clear SKy</p>
            </div>
            <div className="humidySec">
              <h5>Humidity Forecast</h5>
              <div className="humidyDiv">
                {timleyForecast.map((item) => {
                  return (
                    <div key={item.id}>
                      <p id="time">{item.time} </p>
                      <img src={item.weatherPic} />
                      <p id="feels">{item.feels} </p>
                      <p id="degreeT">
                        {item.degree}
                        <sup>o</sup>{" "}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainDashboard;
