import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { MenuItem, MenuList, Paper } from '@material-ui/core'
import { FeedPageContainer, MusicsContainer } from './styles'
import MusicCard from '../../components/MusicCard'

const FeedPage = () => {
    useProtectedPage()

    const musics = useRequestData(`${BASE_URL}/music/get`, [])
    console.log(musics)

    const musicCards = musics.map((music) => {
        return (
            <MusicCard
                key={music.id}
                title={music.title}
                author={music.author}
                date={music.date}
                file={music.file}
                album={music.album}
                genres={music.genres}
                onClick={() => null}
            />
        )
    })
    return (
        <FeedPageContainer>
            <Paper square>
                <MenuList>
                    <MenuItem>My Musics</MenuItem>
                    <MenuItem>Add Music</MenuItem>
                </MenuList>
            </Paper>

            <MusicsContainer>
                {musicCards}
            </MusicsContainer>
        </FeedPageContainer>
    )
}

export default FeedPage