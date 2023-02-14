import { DateTime } from "luxon";
import Location from "./Location";

function Weather({ data }) {
  const currentDateTime = DateTime.local().toLocaleString(DateTime.DATE_HUGE);
  return (
    <>
      <div className="bg-gray-800 p-4 rounded-lg w-max  ">
        <div className="bg-gray-700 p-2 m-2 rounded-lg">
          <div className="bg-gray-600 p-2 m-2 rounded-lg text-2xl font-semibold italic">
            {currentDateTime}
          </div>
          <Location data={data} />
        </div>
        <div className="bg-gray-700 p-2 m-2 rounded-lg">
          <div className="flex justify-between">
            <div className="bg-gray-600 p-2 m-2 rounded-lg max-w-max text-xs">
              Восход:
              {DateTime.fromMillis(data.sys.sunrise * 1000).toLocaleString(
                DateTime.TIME_SIMPLE
              )}
            </div>
            <div className="bg-gray-600 p-2 m-2 rounded-lg max-w-max text-xs">
              Закат:
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
          {/* <div className="bg-gray-600 p-2 m-2 rounded-lg">
            Ощущается: {Math.round(data.main.feels_like)} °C
          </div> */}
        </div>
        {/* <div className="bg-gray-700 p-2 m-2 rounded-lg">
          <div className="bg-gray-600 p-2 m-2 rounded-lg">
            Атмосферное давление: {data.main.pressure} гПа
          </div>
          <div className="bg-gray-600 p-2 m-2 rounded-lg">
            Относительная влажность: {data.main.humidity}%
          </div>
        </div> */}

        {/* <div className="bg-gray-700 p-2 m-2 rounded-lg">
          <div className="bg-gray-600 p-2 m-2 rounded-lg">
            Видимость: {data.visibility} м
          </div>
          <div className="bg-gray-600 p-2 m-2 rounded-lg">
            Скорость ветра: {data.wind.speed} м/сек
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Weather;
