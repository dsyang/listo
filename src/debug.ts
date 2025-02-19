/** Install debug functions on extension installation */

/** Set the initial state for the extension. */
chrome.runtime.onInstalled.addListener(function() {
    set_debug_funcs()
})

/** Debug functions */
function set_debug_funcs() {
    let globalObject: any = (<any>window)

    globalObject.debug_read_storage = function() {
        chrome.storage.sync.get((items) => console.log(items))
    }

    globalObject.debug_read_bookmarks = function() {
        chrome.bookmarks.getTree((tree) => console.log(tree))
    }
}