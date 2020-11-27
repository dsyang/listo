import { createMuiTheme } from '@material-ui/core/styles'

/** color strings for the theme. */
const primaryColorPurple: string = "#C757FD"
const secondaryColorRed: string = "#f4436"
const secondaryColorGrey: string = "#616161"
export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColorPurple,
        },
        secondary: {
            main: secondaryColorGrey,
        }
    }
})