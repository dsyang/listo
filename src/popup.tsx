import React from "react"
import ReactDOM from "react-dom"
import { App } from "./components/App"
import { Error } from "./components/Error"

/** Get active tab and current list information.  */
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    if (tabs.length > 0) {
        const activeTab = tabs[0]
        console.log("Title: %s url: %s", activeTab.title, activeTab.url)
        if (activeTab.url && activeTab.title) {
            ReactDOM.render(
                <App title= {activeTab.title} url={activeTab.url}/>,
                document.getElementById("root"))
            return;
        }
    }
    
    ReactDOM.render(<Error content="Sorry! We could not determine this tab's information." />, document.getElementById("root"))
})