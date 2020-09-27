import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addInterlinear } from './actions/interlinears'
import getVisibleInterlinears from './selectors/interlinears'
import AppRouter from './routers/AppRouter';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = configureStore()

store.dispatch(addInterlinear(
  {
    title: 'first',
    date: '1',
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
    date: '2',
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

store.dispatch(addInterlinear(
  {
    title: 'third',
    date: '3',
    lines: [
      {
        "one": "grapes",
        "two": "виноград"
      },
      {
        "one": "pear",
        "two": "груша"
      },
      {
        "one": "orange",
        "two": "апельсин"
      }
    ]
  }
))

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
