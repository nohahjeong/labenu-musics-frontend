import { useState } from 'react'

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChangeInput = (event) => {
        const newValue = event.target.value
        const fieldName = event.target.name

        setForm({ ...form, [fieldName]: newValue })
    }

    const resetState = () => {
        setForm(initialState)
    }

    return { form, onChangeInput, resetState }
}

export default useForm