import useForm from '../../hooks/useForm'
import axios from 'axios'
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
            .post('http://localhost:3003/user/login', body)
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
            <TextField
                label='E-mail or Nickname'
                type='text'
                onChange={onChangeInput}
                value={form.emailOrNickname}
                name={'emailOrNickname'}
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
                log in
            </Button>
        </FormStyled>
    )
}

export default LogIn