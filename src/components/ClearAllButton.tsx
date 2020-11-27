import React from "react"
import { SavedItems } from "../types"
import { IconButton, Tooltip } from "@material-ui/core"
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

export const ClearAllButton = () =>
    <Tooltip title="Remove all items from listo.">
        <IconButton 
            size="small"
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