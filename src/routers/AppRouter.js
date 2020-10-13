import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Dashboard from '../components/Dashboard'
import AddInterlinearPage from '../components/AddInterlinearPage'
import EditInterlinearPage from '../components/EditInterlinearPage'
import ViewInterlinearPage from '../components/ViewInterlinearPage'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={Dashboard} exact={true} />
                <PublicRoute path="/view/:id" component={ViewInterlinearPage} />
                <PrivateRoute path="/add" component={AddInterlinearPage} />
                <PrivateRoute path="/edit/:id" component={EditInterlinearPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter
