import weatherIcons from './weatherIcons';

export default async function getWeather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}`
  );

  if (!response.ok)
    return {
      error: 'City not Found or Something else went wrong! Please Try again.'
    };

  const data = await response.json();

  const icon =
    weatherIcons[
      `${data.current.condition.code}${data.current.is_day ? '' : 'n'}`
    ] || `https://${data.current.condition.icon}`;

  return {
    ...data,
    icon
  };
}