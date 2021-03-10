import { BrowserRouter as Browser, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import FeedPage from '../pages/FeedPage'
import ErrorPage from '../pages/ErrorPage'
import AddMusicPage from '../pages/AddMusicPage'

const Router = () => {
    return (
        <Browser>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route exact path='/feed'>
                    <FeedPage />
                </Route>

                <Route exact path='/add'>
                    <AddMusicPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </Browser>
    )
}

export default Router