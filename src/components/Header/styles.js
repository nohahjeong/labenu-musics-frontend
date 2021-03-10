import styled from 'styled-components'
import{ primaryColor, primaryColorDark } from '../../constants/colors'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${primaryColor};
    border: .1rem solid ${primaryColorDark};
`