import React from "react"
import { IconButton, ListItem, ListItemText, ListItemSecondaryAction, Tooltip, ListItemAvatar, Avatar } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import CloudIcon from '@material-ui/icons/Cloud'
import { Item, NO_FAVICON, SavedItems, saved_items_key } from "../types"

export interface SavedItemProps extends Item {}

export const SavedItem = (props: SavedItemProps) => {
    return <ListItem key={props.url} alignItems="flex-start" button component="li">
        <ListItemAvatar>
            <SavedItemAvatar url={props.favicon_url}/>
        </ListItemAvatar>
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

const SavedItemAvatar = (props: {url: string}) => {
    if (props.url === NO_FAVICON) {
        console.log("no favicon")
        return <Avatar ><CloudIcon/></Avatar>
    } else {
        return <Avatar alt="favicon" src={props.url} />
    }
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