/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/page/index.css":
/*!****************************!*\
  !*** ./src/page/index.css ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/videoposterrupin.png":
/*!*****************************************!*\
  !*** ./src/images/videoposterrupin.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2966949576a87fb85ab4.png";

/***/ }),

/***/ "./src/images/videopostertrailer.png":
/*!*******************************************!*\
  !*** ./src/images/videopostertrailer.png ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "586de1ef503744f3aee9.png";

/***/ }),

/***/ "./src/videos/CyberGamesRupinCensored.mp4":
/*!************************************************!*\
  !*** ./src/videos/CyberGamesRupinCensored.mp4 ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3d9b96e6f5719d929477.mp4";

/***/ }),

/***/ "./src/videos/CyberGamesTrailer.mp4":
/*!******************************************!*\
  !*** ./src/videos/CyberGamesTrailer.mp4 ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2d70e1a0b9ed8525e882.mp4";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***************************!*\
  !*** ./src/page/index.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/page/index.css");

var teamInfo = {
  omri: {
    name: 'Omri Ruvio',
    role: 'Co-founder / CEO',
    about: 'Full stack web developer, cyber enthusiast, L33T gamer, leader of virtual and real-life teams.'
  },
  guy: {
    name: 'Guy Ruvio',
    role: 'Co-founder',
    about: 'co-founder of Towersec (acq. by Harman / Samsung), Ex 8200, high security positions in governmental organizations conductive security assessments of high-profile civil organizations and Ethical hacker.'
  },
  shai: {
    name: 'Shai Kavas',
    role: 'Advisory Board',
    about: 'Cyber Security Veteran. RAD, Intel. CEO of CyberGuild Ventures, Investor and Venture Builder.'
  },
  saar: {
    name: 'Saar Dickman',
    role: 'Advisory Board',
    about: 'Co-founder of Towersec (acq. by Harman / Samsung), Founder and CEO of Dynamicinfrastructure'
  }
};
var trailerVideo = new URL(/* asset import */ __webpack_require__(/*! ../videos/CyberGamesTrailer.mp4 */ "./src/videos/CyberGamesTrailer.mp4"), __webpack_require__.b);
var rupinVideo = new URL(/* asset import */ __webpack_require__(/*! ../videos/CyberGamesRupinCensored.mp4 */ "./src/videos/CyberGamesRupinCensored.mp4"), __webpack_require__.b);
var trailerPoster = new URL(/* asset import */ __webpack_require__(/*! ../images/videopostertrailer.png */ "./src/images/videopostertrailer.png"), __webpack_require__.b);
var rupinPoster = new URL(/* asset import */ __webpack_require__(/*! ../images/videoposterrupin.png */ "./src/images/videoposterrupin.png"), __webpack_require__.b);
var teamMemberNameElement = document.querySelector('#js-team-member-name');
var teamMemberRoleElement = document.querySelector('#js-team-member-role');
var teamMemberDescriptionElement = document.querySelector('#js-team-member-description');
var omriIcon = document.querySelector('#js-omri-icon');
var guyIcon = document.querySelector('#js-guy-icon');
var shaiIcon = document.querySelector('#js-shai-icon');
var saarIcon = document.querySelector('#js-saar-icon');
document.querySelector('#cybergamestrailer').src = trailerVideo;
document.querySelector('#cybergamestrailer').poster = trailerPoster;
document.querySelector('#cybergamesrupin').src = rupinVideo;
document.querySelector('#cybergamesrupin').poster = rupinPoster;
omriIcon.addEventListener('mouseenter', function () {
  return renderTeamInfo(teamInfo.omri);
});
guyIcon.addEventListener('mouseenter', function () {
  return renderTeamInfo(teamInfo.guy);
});
shaiIcon.addEventListener('mouseenter', function () {
  return renderTeamInfo(teamInfo.shai);
});
saarIcon.addEventListener('mouseenter', function () {
  return renderTeamInfo(teamInfo.saar);
});

function renderTeamInfo(member) {
  teamMemberNameElement.textContent = member.name;
  teamMemberRoleElement.textContent = member.role;
  teamMemberDescriptionElement.textContent = member.about;
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXBCO0FBQUEsQ0FBeEM7QUFDQXFCLE9BQU8sQ0FBQ0ssZ0JBQVIsQ0FBeUIsWUFBekIsRUFBdUM7QUFBQSxTQUFNQyxjQUFjLENBQUM1QixRQUFRLENBQUNLLEdBQVYsQ0FBcEI7QUFBQSxDQUF2QztBQUNBa0IsUUFBUSxDQUFDSSxnQkFBVCxDQUEwQixZQUExQixFQUF3QztBQUFBLFNBQU1DLGNBQWMsQ0FBQzVCLFFBQVEsQ0FBQ00sSUFBVixDQUFwQjtBQUFBLENBQXhDO0FBQ0FrQixRQUFRLENBQUNHLGdCQUFULENBQTBCLFlBQTFCLEVBQXdDO0FBQUEsU0FBTUMsY0FBYyxDQUFDNUIsUUFBUSxDQUFDTyxJQUFWLENBQXBCO0FBQUEsQ0FBeEM7O0FBRUEsU0FBU3FCLGNBQVQsQ0FBd0JDLE1BQXhCLEVBQWdDO0FBQzlCYixFQUFBQSxxQkFBcUIsQ0FBQ2MsV0FBdEIsR0FBb0NELE1BQU0sQ0FBQzNCLElBQTNDO0FBQ0FpQixFQUFBQSxxQkFBcUIsQ0FBQ1csV0FBdEIsR0FBb0NELE1BQU0sQ0FBQzFCLElBQTNDO0FBQ0FpQixFQUFBQSw0QkFBNEIsQ0FBQ1UsV0FBN0IsR0FBMkNELE1BQU0sQ0FBQ3pCLEtBQWxEO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2N5YmVyZ2FtZXMyMDIyLy4vc3JjL3BhZ2UvaW5kZXguY3NzP2RhZWUiLCJ3ZWJwYWNrOi8vY3liZXJnYW1lczIwMjIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3liZXJnYW1lczIwMjIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jeWJlcmdhbWVzMjAyMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2N5YmVyZ2FtZXMyMDIyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2N5YmVyZ2FtZXMyMDIyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2N5YmVyZ2FtZXMyMDIyLy4vc3JjL3BhZ2UvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcblxyXG5jb25zdCB0ZWFtSW5mbyA9IHtcclxuICBvbXJpOiB7XHJcbiAgICBuYW1lOiAnT21yaSBSdXZpbycsXHJcbiAgICByb2xlOiAnQ28tZm91bmRlciAvIENFTycsXHJcbiAgICBhYm91dDogJ0Z1bGwgc3RhY2sgd2ViIGRldmVsb3BlciwgY3liZXIgZW50aHVzaWFzdCwgTDMzVCBnYW1lciwgbGVhZGVyIG9mIHZpcnR1YWwgYW5kIHJlYWwtbGlmZSB0ZWFtcy4nLFxyXG4gIH0sXHJcbiAgZ3V5OiB7XHJcbiAgICBuYW1lOiAnR3V5IFJ1dmlvJyxcclxuICAgIHJvbGU6ICdDby1mb3VuZGVyJyxcclxuICAgIGFib3V0OlxyXG4gICAgICAnY28tZm91bmRlciBvZiBUb3dlcnNlYyAoYWNxLiBieSBIYXJtYW4gLyBTYW1zdW5nKSwgRXggODIwMCwgaGlnaCBzZWN1cml0eSBwb3NpdGlvbnMgaW4gZ292ZXJubWVudGFsIG9yZ2FuaXphdGlvbnMgY29uZHVjdGl2ZSBzZWN1cml0eSBhc3Nlc3NtZW50cyBvZiBoaWdoLXByb2ZpbGUgY2l2aWwgb3JnYW5pemF0aW9ucyBhbmQgRXRoaWNhbCBoYWNrZXIuJyxcclxuICB9LFxyXG4gIHNoYWk6IHtcclxuICAgIG5hbWU6ICdTaGFpIEthdmFzJyxcclxuICAgIHJvbGU6ICdBZHZpc29yeSBCb2FyZCcsXHJcbiAgICBhYm91dDogJ0N5YmVyIFNlY3VyaXR5IFZldGVyYW4uIFJBRCwgSW50ZWwuIENFTyBvZiBDeWJlckd1aWxkIFZlbnR1cmVzLCBJbnZlc3RvciBhbmQgVmVudHVyZSBCdWlsZGVyLicsXHJcbiAgfSxcclxuICBzYWFyOiB7XHJcbiAgICBuYW1lOiAnU2FhciBEaWNrbWFuJyxcclxuICAgIHJvbGU6ICdBZHZpc29yeSBCb2FyZCcsXHJcbiAgICBhYm91dDogJ0NvLWZvdW5kZXIgb2YgVG93ZXJzZWMgKGFjcS4gYnkgSGFybWFuIC8gU2Ftc3VuZyksIEZvdW5kZXIgYW5kIENFTyBvZiBEeW5hbWljaW5mcmFzdHJ1Y3R1cmUnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCB0cmFpbGVyVmlkZW8gPSBuZXcgVVJMKCcuLi92aWRlb3MvQ3liZXJHYW1lc1RyYWlsZXIubXA0JywgaW1wb3J0Lm1ldGEudXJsKTtcclxuY29uc3QgcnVwaW5WaWRlbyA9IG5ldyBVUkwoJy4uL3ZpZGVvcy9DeWJlckdhbWVzUnVwaW5DZW5zb3JlZC5tcDQnLCBpbXBvcnQubWV0YS51cmwpO1xyXG5jb25zdCB0cmFpbGVyUG9zdGVyID0gbmV3IFVSTCgnLi4vaW1hZ2VzL3ZpZGVvcG9zdGVydHJhaWxlci5wbmcnLCBpbXBvcnQubWV0YS51cmwpO1xyXG5jb25zdCBydXBpblBvc3RlciA9IG5ldyBVUkwoJy4uL2ltYWdlcy92aWRlb3Bvc3RlcnJ1cGluLnBuZycsIGltcG9ydC5tZXRhLnVybCk7XHJcbmNvbnN0IHRlYW1NZW1iZXJOYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy10ZWFtLW1lbWJlci1uYW1lJyk7XHJcbmNvbnN0IHRlYW1NZW1iZXJSb2xlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy10ZWFtLW1lbWJlci1yb2xlJyk7XHJcbmNvbnN0IHRlYW1NZW1iZXJEZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtdGVhbS1tZW1iZXItZGVzY3JpcHRpb24nKTtcclxuY29uc3Qgb21yaUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtb21yaS1pY29uJyk7XHJcbmNvbnN0IGd1eUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtZ3V5LWljb24nKTtcclxuY29uc3Qgc2hhaUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtc2hhaS1pY29uJyk7XHJcbmNvbnN0IHNhYXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLXNhYXItaWNvbicpO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N5YmVyZ2FtZXN0cmFpbGVyJykuc3JjID0gdHJhaWxlclZpZGVvO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3liZXJnYW1lc3RyYWlsZXInKS5wb3N0ZXIgPSB0cmFpbGVyUG9zdGVyO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3liZXJnYW1lc3J1cGluJykuc3JjID0gcnVwaW5WaWRlbztcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N5YmVyZ2FtZXNydXBpbicpLnBvc3RlciA9IHJ1cGluUG9zdGVyO1xyXG5cclxub21yaUljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHJlbmRlclRlYW1JbmZvKHRlYW1JbmZvLm9tcmkpKTtcclxuZ3V5SWNvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gcmVuZGVyVGVhbUluZm8odGVhbUluZm8uZ3V5KSk7XHJcbnNoYWlJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiByZW5kZXJUZWFtSW5mbyh0ZWFtSW5mby5zaGFpKSk7XHJcbnNhYXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiByZW5kZXJUZWFtSW5mbyh0ZWFtSW5mby5zYWFyKSk7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUZWFtSW5mbyhtZW1iZXIpIHtcclxuICB0ZWFtTWVtYmVyTmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBtZW1iZXIubmFtZTtcclxuICB0ZWFtTWVtYmVyUm9sZUVsZW1lbnQudGV4dENvbnRlbnQgPSBtZW1iZXIucm9sZTtcclxuICB0ZWFtTWVtYmVyRGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gbWVtYmVyLmFib3V0O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ0ZWFtSW5mbyIsIm9tcmkiLCJuYW1lIiwicm9sZSIsImFib3V0IiwiZ3V5Iiwic2hhaSIsInNhYXIiLCJ0cmFpbGVyVmlkZW8iLCJVUkwiLCJpbXBvcnQiLCJtZXRhIiwidXJsIiwicnVwaW5WaWRlbyIsInRyYWlsZXJQb3N0ZXIiLCJydXBpblBvc3RlciIsInRlYW1NZW1iZXJOYW1lRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlYW1NZW1iZXJSb2xlRWxlbWVudCIsInRlYW1NZW1iZXJEZXNjcmlwdGlvbkVsZW1lbnQiLCJvbXJpSWNvbiIsImd1eUljb24iLCJzaGFpSWNvbiIsInNhYXJJY29uIiwic3JjIiwicG9zdGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlclRlYW1JbmZvIiwibWVtYmVyIiwidGV4dENvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9