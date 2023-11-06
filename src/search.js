import RequestAPI from './api';

export default function calibrateSearchbar() {
  // Searchbar
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
