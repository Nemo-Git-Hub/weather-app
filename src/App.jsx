import { useState, useEffect } from "react";

import Weather from "./components/Weather";

function App() {
  const [count, setCount] = useState(0);
  const [lat, setLat] = useState(null); //широта
  const [long, setLong] = useState(null); //долгота
  const [data, setData] = useState(null); //объект данных погоды

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
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
        }&lang=ru`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
      currentCount;
    };
    fetchData();
  }, [lat, long]);

  const currentCount = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <div className="bg-gray-900 text-gray-200">
        {data ? <Weather data={data} /> : null}
      </div>
    </div>
  );
}

export default App;
