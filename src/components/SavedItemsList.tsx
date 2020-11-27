import React from "react"
import { List, Typography } from "@material-ui/core"
import { SavedItems } from "../types"
import { SavedItem } from "./SavedItem"
import styles from "./App.module.css"

export interface SavedItemsListProps extends SavedItems {}

export const SavedItemsList = (props: SavedItemsListProps) => {
    const listItems = props.saved_items.map(
        (item) => <li key={item.url}><SavedItem {...item} /></li>)
    if (listItems.length == 0) {
        return <EmptyList />
    } else {
        return <List>{listItems}</List>
    }
}

const EmptyList = () =>
    <div className={styles["empty-list-ui"]}> 
        <Typography variant="body1">
            No Saved Items!
        </Typography>
    </div>