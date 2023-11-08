/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RequestAPI),
/* harmony export */   updatePage: () => (/* binding */ updatePage)
/* harmony export */ });
async function RequestAPI(city) {
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

function updatePage(weatherData, degree) {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQSxzREFBc0QsT0FBTyxLQUFLLEtBQUs7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hELDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyx1QkFBdUI7QUFDakUsSUFBSTtBQUNKO0FBQ0EsMENBQTBDLHVCQUF1QjtBQUNqRTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBSZXF1ZXN0QVBJKGNpdHkpIHtcclxuICBjb25zdCBhcGlrZXkgPSAnMmZmN2NlODRjZDFiNGVmOGFlNDQyMDQxMjMwMTExJztcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHthcGlrZXl9JnE9JHtjaXR5fWAsXHJcbiAgKTtcclxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgLy8gbG9jYXRpb25cclxuICBjb25zdCB0aW1lID0gd2VhdGhlckRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQ7XHJcbiAgY29uc3QgY2l0eU5hbWUgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lO1xyXG4gIGNvbnN0IHJlZ2lvbk5hbWUgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5yZWdpb247XHJcbiAgY29uc3QgY291bnRyeU5hbWUgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5O1xyXG5cclxuICAvLyB0ZW1wXHJcbiAgY29uc3QgdGVtcEMgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYztcclxuICBjb25zdCBmZWVsc0xpa2VDID0gd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfYztcclxuICBjb25zdCB0ZW1wRiA9IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mO1xyXG4gIGNvbnN0IGZlZWxzTGlrZUYgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mO1xyXG5cclxuICAvLyB3aW5kXHJcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9kaXI7XHJcbiAgY29uc3Qgd2luZEtwaCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9rcGg7XHJcbiAgY29uc3Qgd2luZE1waCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9tcGg7XHJcblxyXG4gIC8vIG90aGVyXHJcbiAgY29uc3QgeyBodW1pZGl0eSB9ID0gd2VhdGhlckRhdGEuY3VycmVudDtcclxuICBjb25zdCBjb25kaXRpb24gPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdGltZSxcclxuICAgIGNpdHlOYW1lLFxyXG4gICAgcmVnaW9uTmFtZSxcclxuICAgIGNvdW50cnlOYW1lLFxyXG4gICAgdGVtcGVyYXR1cmVDOiB0ZW1wQyxcclxuICAgIHRlbXBlcmF0dXJlRjogdGVtcEYsXHJcbiAgICBmZWVsc0xpa2VDLFxyXG4gICAgZmVlbHNMaWtlRixcclxuICAgIHdpbmREaXJlY3Rpb24sXHJcbiAgICB3aW5kS3BoLFxyXG4gICAgd2luZE1waCxcclxuICAgIGh1bWlkaXR5LFxyXG4gICAgY29uZGl0aW9uLFxyXG4gICAgY29uZGl0aW9uSWNvbixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGFnZSh3ZWF0aGVyRGF0YSwgZGVncmVlKSB7XHJcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpO1xyXG4gIGNvbnN0IGNvdW50cnlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50cnknKTtcclxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAnKTtcclxuICBjb25zdCBmZWVsc2xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHMtbGlrZScpO1xyXG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZC1kaXJlY3Rpb24nKTtcclxuICBjb25zdCB3aW5kS1BIID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQtc3BlZWQta3BoJyk7XHJcbiAgY29uc3Qgd2luZE1QSCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kLXNwZWVkLW1waCcpO1xyXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XHJcbiAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmRpdGlvbicpO1xyXG5cclxuICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmNpdHlOYW1lO1xyXG4gIGNvdW50cnlOYW1lLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY291bnRyeU5hbWU7XHJcbiAgd2luZERpcmVjdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLndpbmREaXJlY3Rpb247XHJcbiAgd2luZEtQSC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLndpbmRLcGh9IGtwaGA7XHJcbiAgd2luZE1QSC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLndpbmRNcGh9IG1waGA7XHJcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5odW1pZGl0eTtcclxuICBjb25kaXRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jb25kaXRpb247XHJcblxyXG4gIGlmIChkZWdyZWUgPT09ICdDJykge1xyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLnRlbXBlcmF0dXJlQztcclxuICAgIGZlZWxzbGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlICR7d2VhdGhlckRhdGEuZmVlbHNMaWtlQ31gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEudGVtcGVyYXR1cmVGO1xyXG4gICAgZmVlbHNsaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHt3ZWF0aGVyRGF0YS5mZWVsc0xpa2VGfWA7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==