import React from "react"
import { Button } from "@material-ui/core"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { ActionButtonProps, Item, SavedItems } from "../types"

export const AddButton = (pageInfo : ActionButtonProps) => 
    <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircleOutlineIcon />}
        onClick = {() => addToStorage(pageInfo.title, pageInfo.url)}>
        Save to listo
    </Button>


/** Add a new Item into chrome storage. */
function addToStorage(title: string, url: string) {
    chrome.storage.sync.get('saved_items', ({'saved_items': data}) => {
        (data as Item[]).push({'title': title, 'url': url}) 
        
        let update: SavedItems = {'saved_items': data}
        chrome.storage.sync.set(update, () => console.log("updated synced storage."))
    })
}