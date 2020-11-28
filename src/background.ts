import { StorageState, saved_items_key } from "./types"
import { Theme } from "./components/Theme"

/** Set the initial state for the extension. */
chrome.runtime.onInstalled.addListener(function() {
    let install_time : Date =new Date()
    let initial_state : StorageState = {
        'time_installed': install_time.getTime(),
        'logo_attribution': "Created by the creative outlet from Noun Project.",
        'saved_items': []}

    chrome.storage.sync.set(initial_state, () => {
            console.log("installed time was: " + install_time.toLocaleTimeString("en-US"))
        })
})

/** React to changes to saved_items and update the Badge. */
chrome.storage.onChanged.addListener(function(changes) {
    let saved_items = changes[saved_items_key]
    if (changes.hasOwnProperty(saved_items_key)) {
        const num_items: number = saved_items.newValue.length
        if (num_items > 9) {
            chrome.browserAction.setBadgeBackgroundColor({color: Theme.palette.primary.dark})
            chrome.browserAction.setBadgeText({text: "9+"})
        } else if (num_items == 0) {
            chrome.browserAction.setBadgeText({text: ""})
        } else {
            chrome.browserAction.setBadgeBackgroundColor({color: Theme.palette.primary.dark})
            chrome.browserAction.setBadgeText({text: num_items.toLocaleString("en-US")})
        }
    }
})
