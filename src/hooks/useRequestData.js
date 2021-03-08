import { useState, useEffect } from 'react'
import axios from 'axios'

const useRequestData = (url, initialState) => {
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
                console.log(error)
                alert('Error - Please try again')
            })
    }, [url])

    return (data)
}

export default useRequestData