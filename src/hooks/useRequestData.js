import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

const useRequestData = (url, initialState) => {
    const history = useHistory()

    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios
            .get(url, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error.response.data)
                alert('Error - Please try again')

                if (error.response.data.error.includes('expired')) {
                    localStorage.removeItem('token')

                    history.push('/')
                }
            })
    }, [url])

    return (data)
}

export default useRequestData