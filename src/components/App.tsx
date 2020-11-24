import React from "react"
import { AddButton } from "./AddButton"
import { RemoveButton } from "./RemoveButton"
import { RestoreAllButton } from "./RestoreAllButton"
import { ClearAllButton } from "./ClearAllButton"
import { SavedItemsListProps, SavedItemsList} from "./SavedItemsList"
import { ActionButtonProps, Item, SavedItems } from "../types"

export interface AppProps {
    actionButton : ActionButtonProps,
    savedItemsList: SavedItems
}

/** Main popup content that will show add and restore buttons as well as a list of stored items */
export const App = (props: AppProps) => {
    const actionButton = 
        props.savedItemsList.saved_items.find((item) => item.url === props.actionButton.url)
            ? <RemoveButton {...props.actionButton} />
            : <AddButton {...props.actionButton} />
    return <div>
        <div> 
            <ClearAllButton />
            <RestoreAllButton urls={props.savedItemsList.saved_items.map((item) => item.url)}/>
            {actionButton}
        </div>
        <SavedItemsList {...props.savedItemsList}/>
    </div> 
}
