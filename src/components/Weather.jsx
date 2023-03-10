import { DateTime } from "luxon";
import Location from "./Location";

function Weather({ data, setLatLong }) {
  const currentDateTime = DateTime.local().toLocaleString(
    DateTime.DATE_MED_WITH_WEEKDAY
  );
  return (
    <>
      <div className="bg-gray-800 p-4 rounded-lg w-max  ">
        <div className="bg-gray-700 p-2 m-2 rounded-lg">
          <div className="bg-gray-600 p-2 m-2 rounded-lg text-2xl font-semibold italic">
            {currentDateTime}
          </div>
          <Location data={data} setLatLong={setLatLong} />
        </div>
        <div className="bg-gray-700 p-2 m-2 rounded-lg">
          <div className="flex justify-between">
            <div className="bg-gray-600 p-2 m-2 rounded-lg max-w-max text-xs">
              Sunrise: 
              {DateTime.fromMillis(data.sys.sunrise * 1000).toLocaleString(
                DateTime.TIME_SIMPLE
              )}
            </div>
            <div className="bg-gray-600 p-2 m-2 rounded-lg max-w-max text-xs">
              Sunset: 
              {DateTime.fromMillis(data.sys.sunset * 1000).toLocaleString(
                DateTime.TIME_SIMPLE
              )}
            </div>
          </div>
          <div className="bg-gray-600 p-2 m-2 rounded-lg text-6xl text-center">
            {Math.round(data.main.temp)} °C
          </div>
          <div className="flex justify-between">
            <div className="bg-gray-600 p-2 m-2 rounded-lg max-w-max text-xs">
              Tmin: {data.main.temp_min.toFixed(1)} °C
            </div>
            <div className="bg-gray-600 p-2 m-2 rounded-lg max-w-max text-xs">
              Tmax: {data.main.temp_max.toFixed(1)} °C
            </div>
          </div>
        </div>
        <div className="bg-gray-700 p-2 m-2 rounded-lg">
          <div className="bg-gray-600 p-2 m-2 rounded-lg uppercase">
            {data.weather[0].description}
          </div>
          <div className="bg-gray-600 p-2 m-2 rounded-lg">
            Feels like: {Math.round(data.main.feels_like)} °C
          </div>
        </div>
        {/* <div className="bg-gray-700 p-2 m-2 rounded-lg">
          <div className="bg-gray-600 p-2 m-2 rounded-lg">
            Pressure: {data.main.pressure} гПа
          </div>
          <div className="bg-gray-600 p-2 m-2 rounded-lg">
            Humidity: {data.main.humidity}%
          </div>
        </div> */}

        <div className="bg-gray-700 p-2 m-2 rounded-lg">
          {/* <div className="bg-gray-600 p-2 m-2 rounded-lg">
            Visibility: {data.visibility} м
          </div> */}
          <div className="bg-gray-600 p-2 m-2 rounded-lg">
            Wind speed: {data.wind.speed} м/сек
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
