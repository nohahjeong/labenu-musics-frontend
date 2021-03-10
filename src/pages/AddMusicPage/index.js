import useForm from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { useHistory } from 'react-router-dom'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import Header from '../../components/Header'
import { AddMusicPageContainer, FormStyled, RowFlexDiv } from './styles'
import useProtectedPage from '../../hooks/useProtectedPage'

const AddMusicPage = () => {
    useProtectedPage()
    const history = useHistory()

    const { form, onChangeInput } = useForm({
        title: '',
        author: '',
        date: '',
        file: '',
        album: '',
        genre: []
    })

    const onSubmit = (event) => {
        event.preventDefault()

        const body = {
            title: form.title,
            author: form.author,
            date: form.date,
            file: form.file,
            album: form.album,
            genre: [form.genre]
        }
        axios
            .post(`${BASE_URL}/music/add`, body, {
                headers: {
                    Authorization: window.localStorage.getItem('token')
                }
            })
            .then((response) => {
                alert('Music added')

                history.push('/feed')
            })
            .catch((error) => {
                if (error.response.data.error.includes('expired')) {
                    localStorage.removeItem('token')
                    
                    history.push('/')
                }
                
                console.log(error.response.data)

                alert(error.response.data.error)
            })
    }

    return (
        <AddMusicPageContainer>
            <Header />

            <FormStyled onSubmit={onSubmit}>
                <TextField
                    label='Title'
                    type='text'
                    onChange={onChangeInput}
                    value={form.title}
                    name={'title'}
                />

                <RowFlexDiv>
                    <TextField
                        label='Author'
                        type='text'
                        onChange={onChangeInput}
                        value={form.author}
                        name={'author'}
                        fullWidth
                    />

                    <TextField
                        label='Album'
                        type='text'
                        onChange={onChangeInput}
                        value={form.album}
                        name={'album'}
                        fullWidth
                    />
                </RowFlexDiv>

                <TextField
                    label='Genre'
                    type='text'
                    onChange={onChangeInput}
                    value={form.genre}
                    name={'genre'}
                    fullWidth
                />

                <RowFlexDiv>
                    <TextField
                        type='date'
                        onChange={onChangeInput}
                        value={form.date}
                        name={'date'}
                    />

                    <input
                        type='file'
                        onChange={onChangeInput}
                        value={form.file}
                        name={'file'}
                        accept='audio/*'
                    />
                </RowFlexDiv>

                <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                >
                    add
                </Button>
            </FormStyled>

        </AddMusicPageContainer>
    )
}

export default AddMusicPage