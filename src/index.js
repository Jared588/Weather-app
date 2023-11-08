import { updatePage } from './api';
import './styles.css';
import calibrateSearchbar, { getWeatherData , defaultSearch } from './search';

let measurement = 'C';

document.addEventListener('DOMContentLoaded', async () => {
  // Make default API request
  defaultSearch('london', measurement);

  // Calibrate Searchbar
  calibrateSearchbar(measurement);

  // Celcius/Farenheit switch
  const degreeSwitch = document.querySelector('.degree-switch');
  let isCelsius = true;

  degreeSwitch.addEventListener('click', () => {
    isCelsius = !isCelsius;
    degreeSwitch.classList.toggle('on');
    degreeSwitch.classList.toggle('off');

    if (isCelsius) {
      degreeSwitch.style.setProperty('--content', '\'C\'');
      measurement = 'C';
      calibrateSearchbar(measurement);
      updatePage(getWeatherData(), measurement);
    } else {
      degreeSwitch.style.setProperty('--content', '\'F\'');
      measurement = 'F';
      calibrateSearchbar(measurement);
      updatePage(getWeatherData(), measurement);
    }
  });
});
