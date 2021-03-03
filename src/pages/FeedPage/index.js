import useProtectedPage from '../../hooks/useProtectedPage'

const FeedPage = () => {
    useProtectedPage()

    return (
        <div>
            feed
        </div>
    )
}

export default FeedPage