import RequestAPI, { updatePage } from './api';

let weatherData;

function setWeatherData(data) {
  weatherData = data;
}

function getWeatherData() {
  return weatherData;
}

export default function calibrateSearchbar(degree) {
  // Searchbar
  const searchbar = document.getElementById('searchbar');
  searchbar.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const input = event.target.value.toLowerCase();
      try {
        const data = await RequestAPI(input);
        setWeatherData(data);
        updatePage(data, degree);
      } catch (error) {
        console.log('Error', error);
      }
    }
  });

  // Placeholder
  searchbar.addEventListener('focus', () => {
    // Clear the placeholder when the input is focused
    searchbar.placeholder = '';
  });

  searchbar.addEventListener('blur', () => {
    // Restore the placeholder when the input is not focused
    searchbar.placeholder = 'Type city name...';
  });
}

export async function defaultSearch(city, degree) {
  try {
    const data = await RequestAPI(city);
    setWeatherData(data);
    updatePage(data, degree);
  } catch (error) {
    console.log('Error', error);
  }
}

export { getWeatherData };
