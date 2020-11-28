import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "@material-ui/core"
import { App, AppProps } from "./components/App"
import { Error } from "./components/Error"
import { Theme } from "./components/Theme"
import { NO_FAVICON, SavedItems, saved_items_key } from "./types"

/** Get active tab and current list information. */
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.storage.sync.get([saved_items_key], (items) => {
        renderApp(tabs, items.hasOwnProperty(saved_items_key) ? items as SavedItems : null)        
    })
})

/** React to changes to saved_items and update the list. */
chrome.storage.onChanged.addListener(function(changes) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let newSavedItems : SavedItems | null
        if (changes.hasOwnProperty(saved_items_key)) {
            newSavedItems = { saved_items: changes[saved_items_key].newValue}
        } else {
            newSavedItems = null
        }
        renderApp(tabs, newSavedItems)        
    })
})


function renderApp(tabs: chrome.tabs.Tab[], items: SavedItems | null) {
    if (isDataValid(tabs, items)) {
        const appData = constuctAppProps(tabs[0], items!!)
        ReactDOM.render(
            themed(<App {...appData} />),
            document.getElementById("root"))
    } else {
        ReactDOM.render(
            themed(<Error content="Sorry! We could not determine this tab's information." />),
            document.getElementById("root"))
    }
}

function isDataValid(tabs: chrome.tabs.Tab[], items: SavedItems | null) {
    if (tabs.length > 0) {
        const activeTab = tabs[0]
        if (activeTab.url && activeTab.title && items != null) {
            return true
        }
    }
    return false
}

function constuctAppProps(activeTab: chrome.tabs.Tab, savedItems: SavedItems): AppProps {
    return {
        actionButton: {title: activeTab.title!!,  url: activeTab.url!!, favicon_url: activeTab.favIconUrl ?? NO_FAVICON},
        savedItemsList: savedItems
    }
}

function themed(child: JSX.Element) {
    return <ThemeProvider theme={Theme}>
        {child}
    </ThemeProvider>
}