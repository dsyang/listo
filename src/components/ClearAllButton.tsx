import React from "react"
import { SavedItems, saved_items_key } from "../types"
import styles from "./Buttons.module.css"

export const ClearAllButton = () =>  {
    return <button className={styles.add} onClick = {() => clearAllSavedItems()}>Clear All</button>
}

/** Clear all saved items in chrome storage. */
function clearAllSavedItems() {
    const resetSavedItems : SavedItems = {
        saved_items: []
    }
    chrome.storage.sync.set(resetSavedItems, () => console.log("Saved Items cleared"));
}