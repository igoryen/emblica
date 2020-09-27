import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../Header'
import Dashboard from '../Dashboard'
import ViewText from '../ViewText'
import NotFoundPage from '../NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={Dashboard} />
                <Route path="/view/:id" component={ViewText} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter; 