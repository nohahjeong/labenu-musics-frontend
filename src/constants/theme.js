import { createMuiTheme } from '@material-ui/core/styles'
import { backgroundColor, primaryColor, primaryColorLight } from './colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: 'black'
        },

        background: {
            main: backgroundColor,
            contrastText: 'white'
        },

        text: {
            primary: primaryColorLight
        }
    }
})

export default theme