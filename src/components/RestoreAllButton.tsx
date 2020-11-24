import React from "react"
import { Button } from "@material-ui/core"
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
export interface RestoreAllButtonProps {
    urls : string[]
}

export const RestoreAllButton = (props: RestoreAllButtonProps) =>     
    <Button
        size="small"
        variant="contained"
        startIcon={<OpenInBrowserIcon />}
        onClick = {() => restoreAllInNewWindow(props.urls)}>
        Open All
    </Button>

/** Open all saved items in a new window. */
function restoreAllInNewWindow(urls: string[]) {
    chrome.windows.create({url: urls}, (window) => {
        console.log("open these urls: ", urls)
    })
}