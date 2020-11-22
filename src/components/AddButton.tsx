import React, { useEffect, useState } from "react" 
import { Item, SavedItems } from "../types";

export interface AddButtonProps {
    title: string,
    url: string
}

export const AddButton = (pageInfo : AddButtonProps) =>  {
    return <button id="reactButton" onClick = {() => addToStorage(pageInfo.title, pageInfo.url)}>+</button>
}

/** Add a new Item into chrome storage. */
function addToStorage(title: string, url: string) {
    chrome.storage.sync.get('saved_items', ({'saved_items': data}) => {
        (data as Item[]).push({'title': "new item: " + title, 'url': url}) 
        
        let update: SavedItems = {'saved_items': data}
        chrome.storage.sync.set(update, () => console.log("updated synced storage."))
    })
}