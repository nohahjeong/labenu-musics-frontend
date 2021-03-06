import useForm from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { useHistory } from 'react-router-dom'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { FormStyled } from './styles'

const LogIn = () => {
    const history = useHistory()

    const { form, onChangeInput, resetState } = useForm({
        emailOrNickname: '',
        password: ''
    })

    const onSubmit = (event) => {
        event.preventDefault()

        const body = {
            emailOrNickname: form.emailOrNickname,
            password: form.password
        }
        axios
            .post(`${BASE_URL}/user/login`, body)
            .then((response) => {
                window.localStorage.setItem('token', response.data.token)

                history.push('/feed')
            })
            .catch((error) => {
                alert(error.response.data.error)
            })

        resetState()
    }

    return (
        <FormStyled onSubmit={onSubmit}>
            <br />
            <br />
            <TextField
                label='E-mail or Nickname'
                type='text'
                onChange={onChangeInput}
                value={form.emailOrNickname}
                name={'emailOrNickname'}
                fullWidth
            />

            <TextField
                label='Password'
                type='password'
                onChange={onChangeInput}
                value={form.password}
                name={'password'}
                fullWidth
            />
            <br />
            <br />
            <Button
                variant='contained'
                color='primary'
                type='submit'
                fullWidth
            >
                log in
                </Button>
        </FormStyled>
    )
}

export default LogIn