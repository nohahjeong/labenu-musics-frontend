import styled from 'styled-components'
import { AppBar } from '@material-ui/core'
import { secondaryColorLight } from '../../constants/colors'

export const HomePageContainer = styled.div`
    width: 60vw;
    min-width: 260px;
    max-width: 340px;
    height: 380px;
    display: flex;
    flex-direction: column;
    background-color: ${secondaryColorLight}
`

export const AppBarStyled = styled(AppBar)`
    height: 50px;
`