import { BrowserRouter as Browser, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'

const Router = () => {
    return (
        <Browser>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </Browser>
    )
}

export default Router