import React from "react"
import { Item, SavedItems } from "../types"
import styles from "./Buttons.module.css"

export interface AddButtonProps {
    title: string,
    url: string
}

export const AddButton = (pageInfo : AddButtonProps) =>  {
    return <button className={styles.add} onClick = {() => addToStorage(pageInfo.title, pageInfo.url)}>+</button>
}

/** Add a new Item into chrome storage. */
function addToStorage(title: string, url: string) {
    chrome.storage.sync.get('saved_items', ({'saved_items': data}) => {
        (data as Item[]).push({'title': title, 'url': url}) 
        
        let update: SavedItems = {'saved_items': data}
        chrome.storage.sync.set(update, () => console.log("updated synced storage."))
    })
}