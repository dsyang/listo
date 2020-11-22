/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.ts":
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const types_1 = __webpack_require__(/*! ./types */ "./src/types.ts");
/** Set the initial state for the extension. */
chrome.runtime.onInstalled.addListener(function () {
    let install_time = new Date();
    let initial_state = {
        'time_installed': install_time.getTime(),
        'logo_attribution': "Created by the creative outlet from Noun Project.",
        'saved_items': []
    };
    chrome.storage.sync.set(initial_state, () => {
        console.log("installed time was: " + install_time.toLocaleTimeString("en-US"));
        set_debug_funcs();
    });
});
/** React to changes to saved_items and update the Badge. */
chrome.storage.onChanged.addListener(function (changes) {
    let saved_items = changes['saved_items'];
    if (changes.hasOwnProperty('saved_items')) {
        const num_items = saved_items.newValue.length;
        if (num_items > 9) {
            chrome.browserAction.setBadgeBackgroundColor({ color: types_1.AppPrimaryColor });
            chrome.browserAction.setBadgeText({ text: "9+" });
        }
        else if (num_items == 0) {
            chrome.browserAction.setBadgeText({ text: "" });
        }
        else {
            chrome.browserAction.setBadgeBackgroundColor({ color: types_1.AppPrimaryColor });
            chrome.browserAction.setBadgeText({ text: num_items.toLocaleString("en-US") });
        }
    }
});
/** Debug functions */
function set_debug_funcs() {
    window.debug_read_storage = function () {
        chrome.storage.sync.get((items) => console.log(items));
    };
}


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! flagged exports */
/*! export AppPrimaryColor [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppPrimaryColor = void 0;
exports.AppPrimaryColor = "#C757FD";


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/background.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcbi8qKiBTZXQgdGhlIGluaXRpYWwgc3RhdGUgZm9yIHRoZSBleHRlbnNpb24uICovXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGluc3RhbGxfdGltZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGluaXRpYWxfc3RhdGUgPSB7XG4gICAgICAgICd0aW1lX2luc3RhbGxlZCc6IGluc3RhbGxfdGltZS5nZXRUaW1lKCksXG4gICAgICAgICdsb2dvX2F0dHJpYnV0aW9uJzogXCJDcmVhdGVkIGJ5IHRoZSBjcmVhdGl2ZSBvdXRsZXQgZnJvbSBOb3VuIFByb2plY3QuXCIsXG4gICAgICAgICdzYXZlZF9pdGVtcyc6IFtdXG4gICAgfTtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChpbml0aWFsX3N0YXRlLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zdGFsbGVkIHRpbWUgd2FzOiBcIiArIGluc3RhbGxfdGltZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiKSk7XG4gICAgICAgIHNldF9kZWJ1Z19mdW5jcygpO1xuICAgIH0pO1xufSk7XG4vKiogUmVhY3QgdG8gY2hhbmdlcyB0byBzYXZlZF9pdGVtcyBhbmQgdXBkYXRlIHRoZSBCYWRnZS4gKi9cbmNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIGxldCBzYXZlZF9pdGVtcyA9IGNoYW5nZXNbJ3NhdmVkX2l0ZW1zJ107XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3NhdmVkX2l0ZW1zJykpIHtcbiAgICAgICAgY29uc3QgbnVtX2l0ZW1zID0gc2F2ZWRfaXRlbXMubmV3VmFsdWUubGVuZ3RoO1xuICAgICAgICBpZiAobnVtX2l0ZW1zID4gOSkge1xuICAgICAgICAgICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3IoeyBjb2xvcjogdHlwZXNfMS5BcHBQcmltYXJ5Q29sb3IgfSk7XG4gICAgICAgICAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiBcIjkrXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobnVtX2l0ZW1zID09IDApIHtcbiAgICAgICAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6IFwiXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7IGNvbG9yOiB0eXBlc18xLkFwcFByaW1hcnlDb2xvciB9KTtcbiAgICAgICAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6IG51bV9pdGVtcy50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIpIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4vKiogRGVidWcgZnVuY3Rpb25zICovXG5mdW5jdGlvbiBzZXRfZGVidWdfZnVuY3MoKSB7XG4gICAgd2luZG93LmRlYnVnX3JlYWRfc3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoKGl0ZW1zKSA9PiBjb25zb2xlLmxvZyhpdGVtcykpO1xuICAgIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXBwUHJpbWFyeUNvbG9yID0gdm9pZCAwO1xuZXhwb3J0cy5BcHBQcmltYXJ5Q29sb3IgPSBcIiNDNzU3RkRcIjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9iYWNrZ3JvdW5kLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7O0EiLCJzb3VyY2VSb290IjoiIn0=