import { AppPrimaryColor, StorageState } from "./types"

/** Set the initial state for the extension. */
chrome.runtime.onInstalled.addListener(function() {
    let install_time : Date =new Date()
    let initial_state : StorageState = {
        'time_installed': install_time.getTime(),
        'logo_attribution': "Created by the creative outlet from Noun Project.",
        'saved_items': []}

    chrome.storage.sync.set(initial_state, () => {
            console.log("installed time was: " + install_time.toLocaleTimeString("en-US"))
            set_debug_funcs()
        })
})

/** React to changes to saved_items and update the Badge. */
chrome.storage.onChanged.addListener(function(changes) {
    let saved_items = changes['saved_items']
    if (changes.hasOwnProperty('saved_items')) {
        const num_items: number = saved_items.newValue.length
        if (num_items > 9) {
            chrome.browserAction.setBadgeBackgroundColor({color: AppPrimaryColor})
            chrome.browserAction.setBadgeText({text: "9+"})
        } else if (num_items == 0) {
            chrome.browserAction.setBadgeText({text: ""})
        } else {
            chrome.browserAction.setBadgeBackgroundColor({color: AppPrimaryColor})
            chrome.browserAction.setBadgeText({text: num_items.toLocaleString("en-US")})
        }
    }
})

/** Debug functions */
function set_debug_funcs() {
    (<any>window).debug_read_storage = function() {
        chrome.storage.sync.get((items) => console.log(items))
    }
}
