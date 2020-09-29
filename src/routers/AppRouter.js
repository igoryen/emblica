import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import AddInterlinearPage from '../components/AddInterlinearPage'
import NotFoundPage from '../components/NotFoundPage'
import EditInterlinearPage from '../components/EditInterlinearPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={Dashboard} />
                <Route path="/add" component={AddInterlinearPage} />
                <Route path="/edit/:id" component={EditInterlinearPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter; 