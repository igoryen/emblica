import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Dashboard from './Dashboard'
import ViewText from './ViewText'
import * as serviceWorker from './serviceWorker';

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={Dashboard} />
      <Route path="/view" component={ViewText} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
