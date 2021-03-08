import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import { goToDetailPage } from '../../routes/coordinator'
import { BASE_URL } from '../../constants/urls'
import { FeedPageContainer, MusicsContainer } from './styles'
import MusicCard from '../../components/MusicCard'
import LateralMenu from '../../components/LateralMenu'

const FeedPage = () => {
    useProtectedPage()

    const history = useHistory()

    const musics = useRequestData(`${BASE_URL}/music/get`, [])

    const onClickCard = (id) => {
        goToDetailPage(history, id)
    }

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
                onClick={() => onClickCard(music.id)}
            />
        )
    })
    return (
        <FeedPageContainer>
            <LateralMenu />

            <MusicsContainer>
                {musicCards}
            </MusicsContainer>
        </FeedPageContainer>
    )
}

export default FeedPage