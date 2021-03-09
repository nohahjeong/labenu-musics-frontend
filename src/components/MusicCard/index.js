import { Card, CardActions, CardContent, Typography } from '@material-ui/core'

const MusicCard = (props) => {
    return (
        <Card>
            <CardActions onClick={props.onClick}>
                <CardContent>
                    <Typography variant='h5'>
                        {props.title}
                    </Typography>

                    <Typography variant='subtitle1'>
                        {props.author}
                    </Typography>
                </CardContent>
            </CardActions>
        </Card>
    )
}

export default MusicCard