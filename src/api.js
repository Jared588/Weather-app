export default async function RequestAPI(city) {
  const apikey = '2ff7ce84cd1b4ef8ae442041230111';
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`,
  );
  const weatherData = await response.json();

  console.log(weatherData);

  // location
  const time = weatherData.current.last_updated;
  const cityName = weatherData.location.name;
  const regionName = weatherData.location.region;
  const countryName = weatherData.location.country;

  // temp
  const tempC = weatherData.current.temp_c;
  const feelsLikeC = weatherData.current.feelslike_c;
  const tempF = weatherData.current.temp_f;
  const feelsLikeF = weatherData.current.feelslike_f;

  // wind
  const windDirection = weatherData.current.wind_dir;
  const windKph = weatherData.current.wind_kph;
  const windMph = weatherData.current.wind_mph;

  // other
  const {humidity} = weatherData.current;
  const condition = weatherData.current.condition.text;
  const conditionIcon = weatherData.current.condition.icon;
}
