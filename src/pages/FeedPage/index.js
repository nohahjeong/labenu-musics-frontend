import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { FeedPageContainer, MusicsContainer } from './styles'
import MusicCard from '../../components/MusicCard'
import Header from '../../components/Header'
import { Modal } from '@material-ui/core'
import MusicModal from '../../components/MusicModal'
import Loading from '../../components/Loading'

const FeedPage = () => {
    useProtectedPage()

    const musics = useRequestData(`${BASE_URL}/music/get`, [])

    const [modalOpened, setModalOpened] = React.useState(false)
    const [musicModal, setMusicModal] = React.useState()

    const onClickCard = (music) => {
        setModalOpened(true)
        setMusicModal(music)
    }
    const handleModalClose = () => {
        setModalOpened(false)
        setMusicModal()
    }

    const musicCards = musics.map((music) => {
        return (
            <MusicCard
                key={music.id}
                title={music.title}
                author={music.author}
                onClick={() => onClickCard(music)}
            />
        )
    })

    return (
        <FeedPageContainer>
            <Header />

            <MusicsContainer>
                {musicCards.length > 0 ? musicCards : <Loading />}
            </MusicsContainer>

            <Modal
                open={modalOpened}
                onClose={handleModalClose}
            >
                <MusicModal music={musicModal} />
            </Modal>
        </FeedPageContainer>
    )
}

export default FeedPage