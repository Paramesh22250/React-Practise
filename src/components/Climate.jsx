import React, { useState } from "react";
import "./formc.css";

function Climate() {
  let apiKey = "3c816c1f7b73e01f540264c1e0445ad8";
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    {
      name: "",
      temp: "",
      max: "",
      min: "",
      wind:"",
      pres:"",
      hum:"",
      feel:"",
    },
  ]);
  const [err, setErr] = useState(false);
  console.log(city);
  const fetchData = async () => {
    console.log(`fetching data ${city}`);
    if (city === "") {
      return setErr(true);
    }
    setLoading(true);
    setErr(false);
    try {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      let r= await res.json();
      let { name, main,wind } = r;
      setData(() => [
        {
          name: name,
          temp: main.temp,
          max: main.temp,
          min: main.temp,
          wind: wind.speed,
          pres:main.pressure,
          hum:main.humidity,
          feel:main.feels_like,

        },
      ]);
      console.log(r)
      setLoading(false);
      setErr(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErr(true);
    }
    console.log(data);
    setCity("");
  };

  return (
    <div>
      <h3>Weather App using API With React JS</h3>
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
      <div className={!loading ? 'weatherBox' : ""}>
        {loading && !err && <h4>Loading ! Please wait...</h4>}
        {!loading && err && <h4>Data not found </h4>}
        {!loading && !err && (
          <div>
            <ul>
              {data.map((one, index) => (
                <li key={index}>
                  <div>
                    <h4>City : {one.name}</h4>
                    <h4>Temp :{one.temp}   ({one.max}/{one.min})</h4>
                    <p>feels like : {one.feel}</p>
                    <p>Humidity : {one.hum}</p>
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
}

export default Climate;
