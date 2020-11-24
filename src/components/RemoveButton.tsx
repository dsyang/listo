import React from "react"
import { ActionButtonProps, Item, SavedItems, saved_items_key } from "../types"
import { Button } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"

export const RemoveButton = (pageInfo : ActionButtonProps) => 
    <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick = {() => removeFromStorage(pageInfo.title, pageInfo.url)}>
        Remove from listo
    </Button>

/** Add a new Item into chrome storage. */
function removeFromStorage(title: string, url: string) {
    chrome.storage.sync.get(saved_items_key, ({[saved_items_key]: data}) => {
        let newItemsList = (data as Item[]).filter((item) => item.url != url) 
        
        let update: SavedItems = {saved_items: newItemsList}
        chrome.storage.sync.set(update, () => console.log("updated synced storage."))
    })
}