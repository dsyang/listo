import React from "react"
import { IconButton, Tooltip } from "@material-ui/core"
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
export interface RestoreAllButtonProps {
    urls : string[]
}

export const RestoreAllButton = (props: RestoreAllButtonProps) =>
    <Tooltip title="Open all items in new window.">
    <IconButton
        size="small"
        onClick = {() => restoreAllInNewWindow(props.urls)}>
        <OpenInBrowserIcon />
    </IconButton>
    </Tooltip>

/** Open all saved items in a new window. */
function restoreAllInNewWindow(urls: string[]) {
    chrome.windows.create({url: urls}, (window) => {
        console.log("open these urls: ", urls)
    })
}