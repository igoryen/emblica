import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addInterlinear } from './actions/interlinears'
import { setTextFilter } from './actions/filters'
import getVisibleInterlinears from './selectors/interlinears'
import AppRouter from './routers/AppRouter';
import './index.css';
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

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
