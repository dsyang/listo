import React from "react"
import { Item, SavedItems } from "../types"
import { SavedItem, SavedItemProps } from "./SavedItem"
import styles from "./App.module.css"

export interface SavedItemsListProps extends SavedItems {

}

export const SavedItemsList = (props: SavedItemsListProps) => {
    const listItems = props.saved_items.map(
        (item) => <li key={item.url}><SavedItem {...item} /></li>)
    if (listItems.length == 0) {
        return <EmptyList />
    } else {
        return <ul>{listItems}</ul>
    }
}

const EmptyList = () => <div className={styles["empty-list-ui"]}> No saved items! </div>