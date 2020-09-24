import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Header from './Header'
import Dashboard from './Dashboard'
import ViewText from './ViewText'
import NotFoundPage from './NotFoundPage'
import * as serviceWorker from './serviceWorker';

const routes = (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact={true} component={Dashboard} />
      <Route path="/view/:id" component={ViewText} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
