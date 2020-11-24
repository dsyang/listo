import React from "react"
import { SavedItems, saved_items_key } from "../types"
import { Button } from "@material-ui/core"
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

export const ClearAllButton = () => 
    <Button 
        size="small"
        variant="contained"
        startIcon={<DeleteSweepIcon />}
        onClick = {() => clearAllSavedItems()}>
        Clear All
    </Button>

/** Clear all saved items in chrome storage. */
function clearAllSavedItems() {
    const resetSavedItems : SavedItems = {
        saved_items: []
    }
    chrome.storage.sync.set(resetSavedItems, () => console.log("Saved Items cleared"));
}