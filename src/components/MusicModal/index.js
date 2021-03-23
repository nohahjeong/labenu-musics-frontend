import { CardContent, Link, Typography } from '@material-ui/core'
import { CardStyled, GenreContainer } from './styles'

const MusicModal = (props) => {
    const genres = (props.music.genres).map((genre) => {
        return <GenreContainer key={genre.id}>{genre.name} </GenreContainer>
    })

    return (
        <CardStyled>
            <CardContent>
                <Typography variant='h5'>
                    {props.music.title}, {props.music.album}
                </Typography>

                <Typography variant='body1'>
                    {props.music.author}, {props.music.date}
                </Typography>

                <Typography variant='body2'>
                    {genres}
                </Typography>

                <Link href={props.music.file}> YouTube Link </Link>
            </CardContent>
        </CardStyled>
    )
}

export default MusicModal