// require("dotenv").config();
// import * as dotenv from "dotenv";
// dotenv.config();
// import express from "express";
// console.log(process.env);
import { useState, useEffect } from "react";
// import Weather from "./components/weather";

function App() {
  const [count, setCount] = useState(0);
  const [lat, setLat] = useState([]); //широта
  const [long, setLong] = useState([]); //долгота
  const [data, setData] = useState([]); //объект данных погоды

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=0b9ac3cd89746404e521d90f5f6a0688`
      )
        // await fetch(
        //   `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        // )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
      currentCount;
    };
    fetchData();

    console.log("Latitude is:", lat); //широта
    console.log("Longitude is:", long); //долгота
    console.log(count);
  }, [lat, long]);

  const currentCount = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="bg-[#ea6666] text-white">
      {/* <button className="border-2 text-2xl" onClick={currentCount}>
        count is {count}
      </button> */}

      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
