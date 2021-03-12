import { useState } from 'react'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { useHistory } from 'react-router-dom'
import { CircularProgress, TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { FormStyled } from './styles'

const SignUp = () => {
    const history = useHistory()
    const [isLoading, setIsloading] = useState(false)

    const { form, onChangeInput, resetState } = useForm({
        name: '',
        nickname: '',
        email: '',
        password: ''
    })

    const onSubmit = (event) => {
        event.preventDefault()

        const body = {
            name: form.name,
            nickname: form.nickname,
            email: form.email,
            password: form.password
        }
        setIsloading(true)
        axios
            .post(`${BASE_URL}/user/signup`, body)
            .then((response) => {
                window.localStorage.setItem('token', response.data.token)

                setIsloading(false)

                history.push('/feed')
            })
            .catch((error) => {
                setIsloading(false)

                alert(error.response.data.error)
            })

        resetState()
    }

    return (
        <FormStyled onSubmit={onSubmit}>
            <TextField
                label='Name'
                type='text'
                onChange={onChangeInput}
                value={form.name}
                name={'name'}
            />

            <TextField
                label='Nickname'
                type='text'
                onChange={onChangeInput}
                value={form.nickname}
                name={'nickname'}
            />

            <TextField
                label='E-mail'
                type='email'
                onChange={onChangeInput}
                value={form.email}
                name={'email'}
            />

            <TextField
                label='Password'
                type='password'
                onChange={onChangeInput}
                value={form.password}
                name={'password'}
            />

            <Button
                variant='contained'
                color='primary'
                type='submit'
            >
                {isLoading ? <CircularProgress color={'inherit'} size={24} /> : <>sign up</>}
            </Button>
        </FormStyled>
    )
}

export default SignUp