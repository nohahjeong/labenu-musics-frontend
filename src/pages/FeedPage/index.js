import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { FeedPageContainer, MusicsContainer } from './styles'
import MusicCard from '../../components/MusicCard'
import LateralMenu from '../../components/LateralMenu'

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
            <LateralMenu />

            <MusicsContainer>
                {musicCards}
            </MusicsContainer>
        </FeedPageContainer>
    )
}

export default FeedPage