import React from "react";
import { otherCityForecast, tempartureArr } from "../serviceFiles/Data";
import "../styles/Traveller.css";
import cloudss from "../assets/cloudss.png";
import umbrella from "../assets/umbrella.png";
import sun from "../assets/sun.png";
import crescent from "../assets/crescent.png";

const TravellerUsers = () => {
  return (
    <div className="mainTravSec">
      <div className="weatherDiv">
        <p className="headerWeather">
          Forecast in <span>Hyderabad IN</span>
        </p>
        <p className="headerWeather">Firday, December 16 at 9:33PM</p>
        <div className="weatherDiv1">
          <div className="overCastDiv">
            <p id="degree1">
              39 <sup>o</sup>C
            </p>
            <p id="contents">Overcast Clouds</p>
            <p id="contents">
              Feels like 31<sup>o</sup> C
            </p>
            <p id="contents">
              <img id="umbrella" src={umbrella} alt="umbrella" /> Umbrella
              required
            </p>
            <img id="cloudsss" src={cloudss} alt="clouds" />
            <div className="temperatruee">
              <p>
                High{" "}
                <span>
                  41<sup>o</sup>C{" "}
                </span>{" "}
              </p>
              <p>
                Low{" "}
                <span>
                  36<sup>o</sup>C{" "}
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="visibilityDIv">
            <p>
              Visibility <span> 10km</span>{" "}
            </p>
            <p>
              Dew Point{" "}
              <span>
                {" "}
                37<sup>o</sup>C
              </span>{" "}
            </p>
            <p>
              Wind <span> 13kmh</span>{" "}
            </p>
            <p>
              Humidity <span>90%</span>{" "}
            </p>
            <p>
              Cloudiness <span>100%</span>{" "}
            </p>
          </div>
          <div className="sunriseDiv">
            <p>
              {" "}
              <img src={sun} alt="sun" /> <br />
              Sunrise
            </p>
            <p>06:30 AM</p>

            <p>
              <img src={crescent} alt="sun" /> <br />
              Sunset
            </p>
            <p>06:30 PM</p>
          </div>
        </div>
        <div className="dailyTemp">
          {tempartureArr.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.day}</p>
                <img src={item.pic} alt="sun" />
                {/* <p>cloud </p> */}
                <p>
                  {item.degree} <sup>o</sup>C
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="forecast">
        <h4>Forecast in Other Cities</h4>
        {otherCityForecast.map((item) => {
          return (
            <div key={item.id}>
              <p id="p1">{item.city} </p>
              <img src={item.weatherPic} alt="iii" />
              <p id="p2">
                {item.degree} <sup>o</sup>C <br />
                {item.feels}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TravellerUsers;
