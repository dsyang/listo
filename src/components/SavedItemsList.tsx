import React from "react"
import { Item, SavedItems } from "../types"
import { SavedItem, SavedItemProps } from "./SavedItem"

export interface SavedItemsListProps extends SavedItems {

}

export const SavedItemsList = (props: SavedItemsListProps) => {
    const listItems = props.saved_items.map( (item) => <li key={item.url}><SavedItem {...item} /></li>)
    console.log(listItems)
    return <ul>{listItems}</ul>
}