import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const useUnprotectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem('token')

        if (token) {
            history.push('/feed')
        }
    }, [])
}

export default useUnprotectedPage