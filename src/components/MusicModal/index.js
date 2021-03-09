import { Card, CardContent, Typography } from '@material-ui/core'

const MusicModal = (props) => {
    const genres = (props.music.genres).map((genre) => {
        return <span key={genre.id}>{genre.name} </span>
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

                {/* <iframe controls>
                    <source src={props.music.file} />
                </iframe> */}
            </CardContent>
        </Card>
    )
}

export default MusicModal