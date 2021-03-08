export const goToFeedPage = (history) => {
    history.push('/feed')
}

export const goToDetailPage = (history, id) => {
    history.push(`/detail/${id}`)
}