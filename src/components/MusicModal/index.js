import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

const MusicModal = (props) => {
    const genres = (props.music.genres).map((genre) => {
        return <span>{genre.name} </span>
    })

    return (
        <Card>
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

                <audio
                    src={props.music.file}
                    controls='controls'
                >
                </audio>
            </CardContent>
        </Card>
    )
}

export default MusicModal