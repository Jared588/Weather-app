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
/* harmony export */   "default": () => (/* binding */ RequestAPI)
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBLHNEQUFzRCxPQUFPLEtBQUssS0FBSztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gUmVxdWVzdEFQSShjaXR5KSB7XHJcbiAgY29uc3QgYXBpa2V5ID0gJzJmZjdjZTg0Y2QxYjRlZjhhZTQ0MjA0MTIzMDExMSc7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7YXBpa2V5fSZxPSR7Y2l0eX1gLFxyXG4gICk7XHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIC8vIGxvY2F0aW9uXHJcbiAgY29uc3QgdGltZSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkO1xyXG4gIGNvbnN0IGNpdHlOYW1lID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcclxuICBjb25zdCByZWdpb25OYW1lID0gd2VhdGhlckRhdGEubG9jYXRpb24ucmVnaW9uO1xyXG4gIGNvbnN0IGNvdW50cnlOYW1lID0gd2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeTtcclxuXHJcbiAgLy8gdGVtcFxyXG4gIGNvbnN0IHRlbXBDID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2M7XHJcbiAgY29uc3QgZmVlbHNMaWtlQyA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2M7XHJcbiAgY29uc3QgdGVtcEYgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZjtcclxuICBjb25zdCBmZWVsc0xpa2VGID0gd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZjtcclxuXHJcbiAgLy8gd2luZFxyXG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfZGlyO1xyXG4gIGNvbnN0IHdpbmRLcGggPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BoO1xyXG4gIGNvbnN0IHdpbmRNcGggPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfbXBoO1xyXG5cclxuICAvLyBvdGhlclxyXG4gIGNvbnN0IHsgaHVtaWRpdHkgfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XHJcbiAgY29uc3QgY29uZGl0aW9uID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcclxuICBjb25zdCBjb25kaXRpb25JY29uID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRpbWUsXHJcbiAgICBjaXR5TmFtZSxcclxuICAgIHJlZ2lvbk5hbWUsXHJcbiAgICBjb3VudHJ5TmFtZSxcclxuICAgIHRlbXBlcmF0dXJlQzogdGVtcEMsXHJcbiAgICB0ZW1wZXJhdHVyZUY6IHRlbXBGLFxyXG4gICAgZmVlbHNMaWtlQyxcclxuICAgIGZlZWxzTGlrZUYsXHJcbiAgICB3aW5kRGlyZWN0aW9uLFxyXG4gICAgd2luZEtwaCxcclxuICAgIHdpbmRNcGgsXHJcbiAgICBodW1pZGl0eSxcclxuICAgIGNvbmRpdGlvbixcclxuICAgIGNvbmRpdGlvbkljb24sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=