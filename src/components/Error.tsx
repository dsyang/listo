import React from "react"
import { Typography } from "@material-ui/core"

export const Error = (props : {content: string}) =>  {
    return <React.Fragment>
        <Typography variant="h6">Error</Typography>
        <Typography variant="body1">{props.content}</Typography>
    </React.Fragment>
}