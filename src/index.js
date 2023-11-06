import RequestAPI from './api';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await RequestAPI('london');
    console.log(data);
  } catch (error) {
    console.error('Error', error);
  }
});

