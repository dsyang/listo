import React from "react"
import { IconButton, ListItem, ListItemText, ListItemSecondaryAction, Tooltip } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import { Item, SavedItems, saved_items_key } from "../types"

export interface SavedItemProps extends Item {

}

export const SavedItemOld = (props: SavedItemProps) => {
    return <div onClick={() => itemClick(props.url)}>
        <p>{props.title}</p>
        <p>{props.url}</p>
        <Tooltip title="Remove Item">
            <IconButton
                size="small" 
                onClick={(e) => {
                    removeItem(props)
                    e.stopPropagation()
                    }}> 
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    </div>
}

export const SavedItem = (props: SavedItemProps) => {
    return <ListItem key={props.url} alignItems="flex-start" button>
        <ListItemText 
            primary={props.title}
            secondary={props.url}
            primaryTypographyProps={{noWrap: true}}
            secondaryTypographyProps={{noWrap: true}}
            onClick={() => itemClick(props.url)}
        />
        <ListItemSecondaryAction>
            <Tooltip title="Remove Item">
                <IconButton
                    size="small" 
                    onClick={(e) => {
                        removeItem(props)
                        e.stopPropagation()
                        }}> 
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </ListItemSecondaryAction>
    </ListItem>
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