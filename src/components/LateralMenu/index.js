import { MenuItem, MenuList, Paper } from '@material-ui/core'

const LateralMenu = () => {
    return (
        <Paper square>
            <MenuList>
                <MenuItem>My Musics</MenuItem>
                <MenuItem>Add Music</MenuItem>
            </MenuList>
        </Paper>
    )
}

export default LateralMenu