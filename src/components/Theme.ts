import { createMuiTheme } from '@material-ui/core/styles';
import { AppPrimaryColor } from '../types'

export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: AppPrimaryColor,
        },
        secondary: {
            main: AppSecondaryColor,
        }
    }
})