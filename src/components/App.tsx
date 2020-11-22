import React from "react"
import { AddButton, AddButtonProps } from "./AddButton"

export interface AppProps extends AddButtonProps {
}

/** Main popup content that will show add and restore buttons as well as a list of stored items */
export const App = (props: AppProps) => {
    return <AddButton title = {props.title} url = {props.url} />
}
