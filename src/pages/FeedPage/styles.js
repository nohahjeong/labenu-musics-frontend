import styled from 'styled-components'
import { primaryColorLight } from '../../constants/colors'

export const FeedPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: ${primaryColorLight};
`

export const MusicsContainer = styled.div`
    width: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`