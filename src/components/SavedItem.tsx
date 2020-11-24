import { IconButton } from "@material-ui/core"
import React from "react"
import { Item, SavedItems, saved_items_key } from "../types"
import DeleteIcon from "@material-ui/icons/Delete"

export interface SavedItemProps extends Item {

}

export const SavedItem = (props: SavedItemProps) => {
    return <div onClick={() => itemClick(props.url)}>
        <p>{props.title}</p>
        <p>{props.url}</p>
        <IconButton
            size="small" 
            onClick={(e) => {
                removeItem(props)
                e.stopPropagation()
                }}> 
            <DeleteIcon />
        </IconButton>
    </div>
}

function removeItem(props: Item) {
    chrome.storage.sync.get(saved_items_key, ({[saved_items_key]: data}) => {
        let newItemList = (data as Item[]).filter(item => item.url !== props.url)
        let update: SavedItems = {saved_items: newItemList}
        chrome.storage.sync.set(update, () => console.log(props.url + " deleted"))
    })
}
function itemClick(url: string) {
    chrome.tabs.create({url: url})
}