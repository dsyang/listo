import React from "react"
import { IconButton, Tooltip } from "@material-ui/core"
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep'
import { SavedItems } from "../types"

export const ClearAllButton = () =>
    <Tooltip title="Remove all items from listo.">
        <IconButton 
            onClick = {() => clearAllSavedItems()}>
            <DeleteSweepIcon />
        </IconButton>
    </Tooltip>

/** Clear all saved items in chrome storage. */
function clearAllSavedItems() {
    const resetSavedItems : SavedItems = {
        saved_items: []
    }
    chrome.storage.sync.set(resetSavedItems, () => console.log("Saved Items cleared"));
}