export default async function RequestAPI(city) {
  const apikey = '2ff7ce84cd1b4ef8ae442041230111';
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`,
  );
  const weatherData = await response.json();

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
  const { humidity } = weatherData.current;
  const condition = weatherData.current.condition.text;
  const conditionIcon = weatherData.current.condition.icon;

  return {
    time,
    cityName,
    regionName,
    countryName,
    temperatureC: tempC,
    temperatureF: tempF,
    feelsLikeC,
    feelsLikeF,
    windDirection,
    windKph,
    windMph,
    humidity,
    condition,
    conditionIcon,
  };
}

export function updatePage(weatherData, degree) {
  const cityName = document.getElementById('city');
  const countryName = document.getElementById('country');
  const temp = document.getElementById('temp');
  const feelslike = document.getElementById('feels-like');
  const windDirection = document.getElementById('wind-direction');
  const windKPH = document.getElementById('wind-speed-kph');
  const windMPH = document.getElementById('wind-speed-mph');
  const humidity = document.getElementById('humidity');
  const condition = document.getElementById('condition');

  cityName.textContent = weatherData.cityName;
  countryName.textContent = weatherData.countryName;
  windDirection.textContent = weatherData.windDirection;
  windKPH.textContent = `${weatherData.windKph} kph`;
  windMPH.textContent = `${weatherData.windMph} mph`;
  humidity.textContent = weatherData.humidity;
  condition.textContent = weatherData.condition;

  if (degree === 'C') {
    temp.textContent = weatherData.temperatureC;
    feelslike.textContent = `Feels like ${weatherData.feelsLikeC}`;
  } else {
    temp.textContent = weatherData.temperatureF;
    feelslike.textContent = `Feels like ${weatherData.feelsLikeF}`;
  }
}
