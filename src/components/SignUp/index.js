import useForm from '../../hooks/useForm'
import { TextField } from '@material-ui/core'
import { ButtonStyled, FormStyled } from './styles'
import axios from 'axios'

const SignUp = () => {
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
        axios
            .post('http://localhost:3003/user/signup', body)
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

            <ButtonStyled variant='contained' type='submit'>
                sign up
            </ButtonStyled>
        </FormStyled>
    )
}

export default SignUp