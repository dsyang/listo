import React from "react"
import styles from "./Buttons.module.css"

export interface RestoreAllButtonProps {
    urls : string[]
}

export const RestoreAllButton = (props: RestoreAllButtonProps) =>  {
    return <button className={styles.add} onClick = {() => restoreAllInNewWindow(props.urls)}>Restore</button>
}

/** Open all saved items in a new window. */
function restoreAllInNewWindow(urls: string[]) {
    chrome.windows.create({url: urls}, (window) => {
        console.log("open these urls: ", urls)
    })
}