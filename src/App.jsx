import { useState, useEffect } from "react";

import Weather from "./components/Weather";

function App() {
  const [lat, setLat] = useState(null); //широта
  const [long, setLong] = useState(null); //долгота
  const [data, setData] = useState(null); //объект данных погоды

  const setLatLong = (newLat, newLong) => {
    setLat(newLat);
    setLong(newLong);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatLong(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (!lat || !long) return;
    const fetchData = async () => {
      await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${
          import.meta.env.VITE_API_KEY
        }&lang=en`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
    console.log(data);
  }, [lat, long]);

  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <div className="bg-gray-900 text-gray-200">
        {data && <Weather data={data} setLatLong={setLatLong} />}
      </div>
    </div>
  );
}

export default App;
