import useForm from '../../hooks/useForm'
import { TextField } from '@material-ui/core'
import { ButtonStyled, FormStyled } from './styles'
import axios from 'axios'

const LogIn = () => {
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
                window.localStorage.setItem(response.data)
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

            <ButtonStyled variant='contained' type='submit'>
                log in
            </ButtonStyled>
        </FormStyled>
    )
}

export default LogIn