import React from "react"
import { Item } from "../types"

export interface SavedItemProps extends Item {

}

export const SavedItem = (props: SavedItemProps) => {
    return <div>
        <p>{props.title}</p>
        <p>{props.url}</p>
    </div>
}