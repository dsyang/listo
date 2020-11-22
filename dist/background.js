/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */

chrome.runtime.onInstalled.addListener(function () {
    let install_time = new Date();
    chrome.storage.sync.set({
        'time_installed': install_time.getTime(),
        'logo_attribution': "Created by the creative outlet from Noun Project.",
        'saved_items': []
    }, () => {
        console.log("installed time was: " + install_time.toLocaleTimeString("en-US"));
        set_debug_funcs();
    });
});
function set_debug_funcs() {
    window.debug_read_storage = function () {
        chrome.storage.sync.get((items) => console.log(items));
    };
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgIGxldCBpbnN0YWxsX3RpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtcbiAgICAgICAgJ3RpbWVfaW5zdGFsbGVkJzogaW5zdGFsbF90aW1lLmdldFRpbWUoKSxcbiAgICAgICAgJ2xvZ29fYXR0cmlidXRpb24nOiBcIkNyZWF0ZWQgYnkgdGhlIGNyZWF0aXZlIG91dGxldCBmcm9tIE5vdW4gUHJvamVjdC5cIixcbiAgICAgICAgJ3NhdmVkX2l0ZW1zJzogW11cbiAgICB9LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zdGFsbGVkIHRpbWUgd2FzOiBcIiArIGluc3RhbGxfdGltZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiKSk7XG4gICAgICAgIHNldF9kZWJ1Z19mdW5jcygpO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBzZXRfZGVidWdfZnVuY3MoKSB7XG4gICAgd2luZG93LmRlYnVnX3JlYWRfc3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoKGl0ZW1zKSA9PiBjb25zb2xlLmxvZyhpdGVtcykpO1xuICAgIH07XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==