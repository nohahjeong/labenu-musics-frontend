import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import TabPanel from '../../components/TabPanel'
import LogIn from '../../components/LogIn'
import SignUp from '../../components/SignUp'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { MainContainer } from './styles'

const HomePage = () => {
    const [tab, setTab] = React.useState(0)

    useUnprotectedPage()

    const handleTabChange = (event, selectedTab) => {
        setTab(selectedTab)
    }

    return (
        <MainContainer>
            <div>
                <AppBar
                    position='static'
                    color='secondary'
                    elevation={0}
                >
                    <Tabs
                        value={tab}
                        onChange={handleTabChange}
                        indicatorColor='primary'
                    >
                        <Tab label='log in' />

                        <Tab label='sign up' />
                    </Tabs>
                </AppBar>

                <TabPanel value={tab} index={0}>
                    <LogIn />
                </TabPanel>

                <TabPanel value={tab} index={1}>
                    <SignUp />
                </TabPanel>
            </div>
        </MainContainer>
    )
}

export default HomePage

// https://material-ui.com/pt/components/tabs/#vertical-tabs