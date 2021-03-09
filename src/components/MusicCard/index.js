import { CardActions, CardContent, Typography } from '@material-ui/core'
import { CardStyled } from './styles'

const MusicCard = (props) => {
    return (
        <CardStyled>
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
        </CardStyled>
    )
}

export default MusicCard