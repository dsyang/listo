import React from "react"
import { ActionButtonProps, Item, SavedItems, saved_items_key } from "../types"
import styles from "./Buttons.module.css"

export const RemoveButton = (pageInfo : ActionButtonProps) =>  {
    return <button className={styles.add} onClick = {() => removeFromStorage(pageInfo.title, pageInfo.url)}>-</button>
}

/** Add a new Item into chrome storage. */
function removeFromStorage(title: string, url: string) {
    chrome.storage.sync.get(saved_items_key, ({[saved_items_key]: data}) => {
        let newItemsList = (data as Item[]).filter((item) => item.url != url) 
        
        let update: SavedItems = {saved_items: newItemsList}
        chrome.storage.sync.set(update, () => console.log("updated synced storage."))
    })
}