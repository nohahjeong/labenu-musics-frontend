import useProtectedPage from '../../hooks/useProtectedPage'
import { MenuItem, MenuList, Paper } from '@material-ui/core'
import { FeedPageContainer, PaperStyled } from './styles'

const FeedPage = () => {
    // useProtectedPage()



    return (
        <FeedPageContainer>
            <Paper square>
                <MenuList>
                    <MenuItem>My Musics</MenuItem>
                    <MenuItem>Add Music</MenuItem>
                </MenuList>
            </Paper>
            feed
        </FeedPageContainer>
    )
}

export default FeedPage