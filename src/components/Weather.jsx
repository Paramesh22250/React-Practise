import React, { useState } from "react";
import "./useFetching";
import useFetching from "./useFetching";
const Weather = () => {
  const [city, setCity] = useState("");
  console.log(useFetching());
  const { loading, err, data, fetchData } = useFetching(city);
  return (
    <div>
      <h3>Weather App using Custom Hook With React JS</h3>
      <div className="ins">
        <span>
          <input
            type="text"
            id="city"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </span>
        <span>
          <button onClick={fetchData}>Search</button>
        </span>
      </div>
      <div className={!loading ? "weatherBox" : ""}>
        {loading && !err && <h4>Loading ! Please wait...</h4>}
        {!loading && err && <h4>Data not found </h4>}
        {!loading && !err && (
          <div>
            <ul>
              {data.map((one, index) => (
                <li key={index}>
                  <div>
                    <h4>The weather in {one.name} is {one.weather}</h4>
                    <h4>
                      Temp :{one.temp}&deg; &nbsp; &nbsp;({one.max}/{one.min})
                    </h4>
                    <p>feels like : {one.feel}</p>
                    <p>Humidity : {one.hum}%</p>
                    <p>Pressure : {one.pres}</p>
                    <p>Wind speed : {one.wind}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
