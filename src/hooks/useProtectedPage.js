import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem('token')

        if (!token) {
            history.push('/')
        }
    }, [])
}

export default useProtectedPage