import RequestAPI from './api';
import './styles.css'

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await RequestAPI('london');
    console.log(data);
  } catch (error) {
    console.error('Error', error);
  }
});

