import styled from 'styled-components'
import { Card } from '@material-ui/core'
import { primaryColor } from '../../constants/colors'

export const CardStyled = styled(Card)`
    width: 78vw;
    margin: auto;
    position: relative;
    top: 40vh;
`

export const GenreContainer = styled.div`
    display: inline-flexbox;
    border: 1px solid ${primaryColor};
    border-radius: .3rem;
    margin: .8rem;
    padding: .4rem;
`