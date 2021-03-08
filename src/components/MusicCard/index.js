import { Card, CardActions, CardContent } from '@material-ui/core'

const MusicCard = (props) => {
    return (
        <Card>
            <CardContent>
                {props.title}
            </CardContent>

            <CardActions>
                botao
            </CardActions>
        </Card>
    )
}

export default MusicCard