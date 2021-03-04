import { createMuiTheme } from '@material-ui/core/styles'
import { secondaryColor, primaryColor, primaryColorLight } from './colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: 'black'
        },

        secondary: {
            main: secondaryColor,
            contrastText: 'white'
        },

        text: {
            primary: primaryColorLight
        }
    }
})

export default theme