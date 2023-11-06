import RequestAPI from './api';
import './styles.css';

document.addEventListener('DOMContentLoaded', async () => {
  // Make default API request
  try {
    const data = await RequestAPI('london');
    console.log(data);
  } catch (error) {
    console.error('Error', error);
  }

  // searchbar
  const searchbar = document.getElementById('searchbar');
  searchbar.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const input = event.target.value.toLowerCase();
      try {
        const weatherData = await RequestAPI(input);
        console.log(weatherData);
      } catch (error) {
        console.log('Error', error);
      }
    }
  });
});
