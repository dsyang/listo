import React from "react"
import { AddButton, AddButtonProps } from "./AddButton"
import { RestoreAllButton } from "./RestoreAllButton"
import { ClearAllButton } from "./ClearAllButton"
import { SavedItemsListProps, SavedItemsList} from "./SavedItemsList"
import { Item, SavedItems } from "../types"

export interface AppProps {
    addButton : AddButtonProps,
    savedItemsList: SavedItems
}

/** Main popup content that will show add and restore buttons as well as a list of stored items */
export const App = (props: AppProps) => {
    return <div>
        <div> 
            <AddButton {...props.addButton} /> 
            <RestoreAllButton urls={props.savedItemsList.saved_items.map((item) => item.url)}/>
            <ClearAllButton />
        </div>
        <SavedItemsList {...props.savedItemsList}/>
    </div> 
}
