/** Install debug functions on extension installation */

/** Set the initial state for the extension. */
chrome.runtime.onInstalled.addListener(function() {
    set_debug_funcs()
})

/** Debug functions */
function set_debug_funcs() {
    (<any>window).debug_read_storage = function() {
        chrome.storage.sync.get((items) => console.log(items))
    }
}