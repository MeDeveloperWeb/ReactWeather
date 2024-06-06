import { useEffect, useState } from "react";
import WeatherDetailGrid from "./WeatherDetails";
import getWeather from "./weather";
import location from '../assets/weather-icons/location.svg';
import Modal, { showModal } from "./Modal";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState('c');
  const [currLocation, setCurrLocation] = useState('Mumbai');

  useEffect(() => {
    const fetchData = async () => {
      const weather = await getWeather(currLocation);
      setWeather(weather);
    };
    fetchData();
  }, [currLocation])

  return (
    <>
      <div className="flex justify-center items-center">
        <img
          src={weather?.icon}
          alt={weather?.current?.condition?.text}
          width={64}
          height={64}
          className="-mx-[10%] -my-[15%] w-[min(80vw,600px)]"
        />
        <div>
          <div className="flex text-[min(12vw,100px)] font-bold text-slate-600">
            {weather?.current && weather?.current['temp_' + unit]}&deg;{unit.toUpperCase()}
            <button
              onClick={() => setUnit(unit === 'c' ? 'f' : 'c')}
              className="text-base border-solid border-2 border-slate-700 bg-slate-500 text-white px-2 rounded-md m-4 h-fit self-end"
            >
              &deg;{unit === 'c' ? 'F' : 'C'}
            </button>
          </div>
          <div>
            Feels like: {weather?.current && weather?.current['feelslike_' + unit]}&deg;
            {unit.toUpperCase()}
          </div>
        </div>
      </div>
      <WeatherDetailGrid weather={weather} />
      <div className="flex justify-center items-center">
        <img src={location} alt="location" width={40} height={40} />
        <div>
          {weather?.location?.name},{' '}
          {weather?.location?.region ? weather?.location?.region + ', ' : ''}
          {weather?.location?.country ? weather?.location?.country : ''}
        </div>
      </div>
      <button onClick={showModal} className="my-8 text-blue-600 underline">
        Change Location
      </button>
      <Modal setCurrLocation={setCurrLocation} />
    </>)
}