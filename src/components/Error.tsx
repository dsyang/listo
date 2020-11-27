import { Typography } from "@material-ui/core"
import React from "react"

export const Error = (props : {content: string}) =>  {
    return <React.Fragment>
        <Typography variant="h6">Error</Typography>
        <Typography variant="body1">{props.content}</Typography>
    </React.Fragment>
}