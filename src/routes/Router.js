import { BrowserRouter as Browser, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import ErrorPage from '../pages/ErrorPage'

const Router = () => {
    return (
        <Browser>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route exact path='/signup'>
                    <SignupPage />
                </Route>

                <Route exact path='/login'>
                    <LoginPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </Browser>
    )
}

export default Router