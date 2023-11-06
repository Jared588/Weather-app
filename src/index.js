import RequestAPI from './api';
import './styles.css';
import calibrateSearchbar from './search';

document.addEventListener('DOMContentLoaded', async () => {
  // Make default API request
  try {
    const data = await RequestAPI('london');
    console.log(data);
  } catch (error) {
    console.error('Error', error);
  }

  // Searchbar
  calibrateSearchbar();
});
