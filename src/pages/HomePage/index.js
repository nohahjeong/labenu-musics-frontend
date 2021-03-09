import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import TabPanel from '../../components/TabPanel'
import LogIn from '../../components/LogIn'
import SignUp from '../../components/SignUp'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { HomePageContainer, AppBarStyled } from './styles'

const HomePage = () => {
    const [tab, setTab] = React.useState(0)

    useUnprotectedPage()

    const handleTabChange = (event, selectedTab) => {
        setTab(selectedTab)
    }

    let component
    if (tab === 1) {
        component = <SignUp />
    } else {
        component = <LogIn />
    }

    return (
        <HomePageContainer>
            <AppBarStyled
                position='static'
                color='secondary'
                elevation={0}
            >
                <Tabs
                    value={tab}
                    onChange={handleTabChange}
                    indicatorColor='primary'
                    centered
                >
                    <Tab label='log in' />

                    <Tab label='sign up' />
                </Tabs>
            </AppBarStyled>

            <TabPanel value={tab} index={tab}>
                {component}
            </TabPanel>
        </HomePageContainer>
    )
}

export default HomePage