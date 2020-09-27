import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './store/configureStore'
import { addInterlinear } from './actions/interlinears'
import { setTextFilter } from './actions/filters'
import getVisibleInterlinears from './selectors/interlinears'
import './index.css';
import Header from './Header'
import Dashboard from './Dashboard'
import ViewText from './ViewText'
import NotFoundPage from './NotFoundPage'
import * as serviceWorker from './serviceWorker';

const store = configureStore()

store.dispatch(addInterlinear(
  {
    title: 'first',
    lines: [
      {
        "one": "apple",
        "two": "яблоко"
      },
      {
        "one": "cherry",
        "two": "вишня"
      },
      {
        "one": "bread",
        "two": "хлеб"
      }
    ]
  }
))

store.dispatch(addInterlinear(
  {
    title: 'second',
    lines: [
      {
        "one": "cabbage",
        "two": "капуста"
      },
      {
        "one": "banana",
        "two": "банан"
      },
      {
        "one": "sausage",
        "two": "колбаса"
      }
    ]
  }
))

store.dispatch(setTextFilter('s')) // used on title
const state = store.getState()
const visibleInterlinears = getVisibleInterlinears(state.interlinears, state.filters)
console.log('visibleInterlinears', visibleInterlinears)

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
