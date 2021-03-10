import React from 'react'
import { useHistory } from 'react-router-dom'
import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { HeaderContainer } from './styles'
import { goToAddMusicPage, goToFeedPage } from '../../routes/coordinator'

const Header = () => {
    const history = useHistory()

    const [menuState, setMenuState] = React.useState(null)

    const handleMenuClick = (event) => {
        setMenuState(event.currentTarget)
    }

    const handleMenuClose = () => {
        setMenuState(null)
    }

    return (
        <HeaderContainer position='static'>
            <IconButton
                aria-controls='menu'
                aria-haspopup='true'
                onClick={handleMenuClick}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>

            <Menu
                id='menu'
                anchorEl={menuState}
                keepMounted
                open={Boolean(menuState)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={() => goToFeedPage(history)}>
                    My Musics
                </MenuItem>
                <MenuItem onClick={() => goToAddMusicPage(history)}>
                    Add Music
                </MenuItem>
            </Menu>

            <Typography variant="h6">
                Labenu Musics
          </Typography>
        </HeaderContainer>
    )
}

export default Header