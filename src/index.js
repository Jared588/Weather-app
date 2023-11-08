import RequestAPI, { updatePage } from './api';
import './styles.css';
import calibrateSearchbar from './search';

document.addEventListener('DOMContentLoaded', async () => {
  // Make default API request
  try {
    const data = await RequestAPI('london');
    updatePage(data, 'C');
  } catch (error) {
    console.error('Error', error);
  }

  // Searchbar
  calibrateSearchbar();
});
