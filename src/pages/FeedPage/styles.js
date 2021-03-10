import styled from 'styled-components'
import { primaryColorLight } from '../../constants/colors'

export const FeedPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${primaryColorLight};
    overflow: hidden;
    overflow-y: scroll;
`

export const MusicsContainer = styled.div`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
`