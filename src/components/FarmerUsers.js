import React from "react";
import wind from '../assets/weather.png'
import humidity from '../assets/humidity.png'

const FarmerUsers = () => {
  return (
    <div className="farmerSec">
      <p id="headerF">TODAY'S HIGHLIGHTS</p>
      <div className="maintemp">
        <div className="tempSec">
          <p>UV Index</p>
          <div className="progress-bar">
            <div className="barOverflow">
              <div className="bar"></div>
            </div>
            <span>80</span>
          </div>
        </div>
        <div className="tempSec">
          <p>Humidy</p>
          <img  src={humidity} alt="humidity"/>
          <p>63%</p>
        </div>
        <div className="tempSec">
          <p>Wind Speed</p>
          <img src={wind} alt="wind" width={"25%"} />
          <p>8 Kmph</p>
        </div>
      </div>
    </div>
  );
};

export default FarmerUsers;
