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

/***/ "./src/videos/CyberGamesTrailer.mp4":
/*!******************************************!*\
  !*** ./src/videos/CyberGamesTrailer.mp4 ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2d70e1a0b9ed8525e882.mp4";

/***/ }),

/***/ "./src/videos/CyberGamesinRupincollege.mp4":
/*!*************************************************!*\
  !*** ./src/videos/CyberGamesinRupincollege.mp4 ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9362a04e82c88d5b471e.mp4";

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
var rupinVideo = new URL(/* asset import */ __webpack_require__(/*! ../videos/CyberGamesinRupincollege.mp4 */ "./src/videos/CyberGamesinRupincollege.mp4"), __webpack_require__.b);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0MsSUFBVixDQUFwQjtBQUFBLENBQXhDO0FBQ0FxQixPQUFPLENBQUNLLGdCQUFSLENBQXlCLFlBQXpCLEVBQXVDO0FBQUEsU0FBTUMsY0FBYyxDQUFDNUIsUUFBUSxDQUFDSyxHQUFWLENBQXBCO0FBQUEsQ0FBdkM7QUFDQWtCLFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsWUFBMUIsRUFBd0M7QUFBQSxTQUFNQyxjQUFjLENBQUM1QixRQUFRLENBQUNNLElBQVYsQ0FBcEI7QUFBQSxDQUF4QztBQUNBa0IsUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixZQUExQixFQUF3QztBQUFBLFNBQU1DLGNBQWMsQ0FBQzVCLFFBQVEsQ0FBQ08sSUFBVixDQUFwQjtBQUFBLENBQXhDOztBQUVBLFNBQVNxQixjQUFULENBQXlCQyxNQUF6QixFQUFpQztBQUMvQmIsRUFBQUEscUJBQXFCLENBQUNjLFdBQXRCLEdBQW9DRCxNQUFNLENBQUMzQixJQUEzQztBQUNBaUIsRUFBQUEscUJBQXFCLENBQUNXLFdBQXRCLEdBQW9DRCxNQUFNLENBQUMxQixJQUEzQztBQUNBaUIsRUFBQUEsNEJBQTRCLENBQUNVLFdBQTdCLEdBQTJDRCxNQUFNLENBQUN6QixLQUFsRDtBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeWJlcmdhbWVzMjAyMi8uL3NyYy9wYWdlL2luZGV4LmNzcz9kYWVlIiwid2VicGFjazovL2N5YmVyZ2FtZXMyMDIyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2N5YmVyZ2FtZXMyMDIyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY3liZXJnYW1lczIwMjIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jeWJlcmdhbWVzMjAyMi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jeWJlcmdhbWVzMjAyMi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jeWJlcmdhbWVzMjAyMi8uL3NyYy9wYWdlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9pbmRleC5jc3MnXHJcblxyXG5jb25zdCB0ZWFtSW5mbyA9IHtcclxuICBvbXJpOiB7bmFtZTonT21yaSBSdXZpbycsIHJvbGU6J0NvLWZvdW5kZXIgLyBDRU8nLGFib3V0OiAnRnVsbCBzdGFjayB3ZWIgZGV2ZWxvcGVyLCBjeWJlciBlbnRodXNpYXN0LCBMMzNUIGdhbWVyLCBsZWFkZXIgb2YgdmlydHVhbCBhbmQgcmVhbC1saWZlIHRlYW1zLid9LFxyXG4gIGd1eToge25hbWU6J0d1eSBSdXZpbycsIHJvbGU6J0NvLWZvdW5kZXInLCBhYm91dDonY28tZm91bmRlciBvZiBUb3dlcnNlYyAoYWNxLiBieSBIYXJtYW4gLyBTYW1zdW5nKSwgRXggODIwMCwgaGlnaCBzZWN1cml0eSBwb3NpdGlvbnMgaW4gZ292ZXJubWVudGFsIG9yZ2FuaXphdGlvbnMgY29uZHVjdGl2ZSBzZWN1cml0eSBhc3Nlc3NtZW50cyBvZiBoaWdoLXByb2ZpbGUgY2l2aWwgb3JnYW5pemF0aW9ucyBhbmQgRXRoaWNhbCBoYWNrZXIuJ30sXHJcbiAgc2hhaToge25hbWU6J1NoYWkgS2F2YXMnLCByb2xlOidBZHZpc29yeSBCb2FyZCcsYWJvdXQ6ICdDeWJlciBTZWN1cml0eSBWZXRlcmFuLiBSQUQsIEludGVsLiBDRU8gb2YgQ3liZXJHdWlsZCBWZW50dXJlcywgSW52ZXN0b3IgYW5kIFZlbnR1cmUgQnVpbGRlci4nfSxcclxuICBzYWFyOiB7bmFtZTonU2FhciBEaWNrbWFuJywgcm9sZTonQWR2aXNvcnkgQm9hcmQnLGFib3V0OiAnQ28tZm91bmRlciBvZiBUb3dlcnNlYyAoYWNxLiBieSBIYXJtYW4gLyBTYW1zdW5nKSwgRm91bmRlciBhbmQgQ0VPIG9mIER5bmFtaWNpbmZyYXN0cnVjdHVyZSd9XHJcbn1cclxuXHJcbmNvbnN0IHRyYWlsZXJWaWRlbyA9IG5ldyBVUkwoJy4uL3ZpZGVvcy9DeWJlckdhbWVzVHJhaWxlci5tcDQnLCBpbXBvcnQubWV0YS51cmwpO1xyXG5jb25zdCBydXBpblZpZGVvID0gbmV3IFVSTCgnLi4vdmlkZW9zL0N5YmVyR2FtZXNpblJ1cGluY29sbGVnZS5tcDQnLCBpbXBvcnQubWV0YS51cmwpO1xyXG5jb25zdCB0cmFpbGVyUG9zdGVyID0gbmV3IFVSTCgnLi4vaW1hZ2VzL3ZpZGVvcG9zdGVydHJhaWxlci5wbmcnLCBpbXBvcnQubWV0YS51cmwpO1xyXG5jb25zdCBydXBpblBvc3RlciA9IG5ldyBVUkwoJy4uL2ltYWdlcy92aWRlb3Bvc3RlcnJ1cGluLnBuZycsIGltcG9ydC5tZXRhLnVybCk7XHJcbmNvbnN0IHRlYW1NZW1iZXJOYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy10ZWFtLW1lbWJlci1uYW1lJylcclxuY29uc3QgdGVhbU1lbWJlclJvbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLXRlYW0tbWVtYmVyLXJvbGUnKVxyXG5jb25zdCB0ZWFtTWVtYmVyRGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLXRlYW0tbWVtYmVyLWRlc2NyaXB0aW9uJylcclxuY29uc3Qgb21yaUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtb21yaS1pY29uJylcclxuY29uc3QgZ3V5SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1ndXktaWNvbicpXHJcbmNvbnN0IHNoYWlJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLXNoYWktaWNvbicpXHJcbmNvbnN0IHNhYXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLXNhYXItaWNvbicpXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3liZXJnYW1lc3RyYWlsZXInKS5zcmMgPSB0cmFpbGVyVmlkZW87XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjeWJlcmdhbWVzdHJhaWxlcicpLnBvc3RlciA9IHRyYWlsZXJQb3N0ZXI7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjeWJlcmdhbWVzcnVwaW4nKS5zcmMgPSBydXBpblZpZGVvO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3liZXJnYW1lc3J1cGluJykucG9zdGVyID0gcnVwaW5Qb3N0ZXI7XHJcblxyXG5vbXJpSWNvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gcmVuZGVyVGVhbUluZm8odGVhbUluZm8ub21yaSkpO1xyXG5ndXlJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiByZW5kZXJUZWFtSW5mbyh0ZWFtSW5mby5ndXkpKTtcclxuc2hhaUljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHJlbmRlclRlYW1JbmZvKHRlYW1JbmZvLnNoYWkpKTtcclxuc2Fhckljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHJlbmRlclRlYW1JbmZvKHRlYW1JbmZvLnNhYXIpKTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRlYW1JbmZvIChtZW1iZXIpIHtcclxuICB0ZWFtTWVtYmVyTmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBtZW1iZXIubmFtZTtcclxuICB0ZWFtTWVtYmVyUm9sZUVsZW1lbnQudGV4dENvbnRlbnQgPSBtZW1iZXIucm9sZTtcclxuICB0ZWFtTWVtYmVyRGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gbWVtYmVyLmFib3V0O1xyXG59Il0sIm5hbWVzIjpbInRlYW1JbmZvIiwib21yaSIsIm5hbWUiLCJyb2xlIiwiYWJvdXQiLCJndXkiLCJzaGFpIiwic2FhciIsInRyYWlsZXJWaWRlbyIsIlVSTCIsImltcG9ydCIsIm1ldGEiLCJ1cmwiLCJydXBpblZpZGVvIiwidHJhaWxlclBvc3RlciIsInJ1cGluUG9zdGVyIiwidGVhbU1lbWJlck5hbWVFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVhbU1lbWJlclJvbGVFbGVtZW50IiwidGVhbU1lbWJlckRlc2NyaXB0aW9uRWxlbWVudCIsIm9tcmlJY29uIiwiZ3V5SWNvbiIsInNoYWlJY29uIiwic2Fhckljb24iLCJzcmMiLCJwb3N0ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyVGVhbUluZm8iLCJtZW1iZXIiLCJ0ZXh0Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=