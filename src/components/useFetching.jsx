
import { useState } from "react";

const useFetching = (city) => {
    let apiKey = "3c816c1f7b73e01f540264c1e0445ad8";
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
            weather:""
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
      let { name, main,wind,weather } = await res.json();
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
            weather:weather[0].main,
          },
      ]);
      setLoading(false);
      setErr(false); 
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErr(true);
    }
    console.log(data);
    // setCity("");
  };
  return {data,loading,err,fetchData}

}

export default useFetching
