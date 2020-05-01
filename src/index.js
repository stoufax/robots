import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'

import App from './containers/App'
import { searchRobots, requestRobots } from './reducers'

import registerServiceWorker from './registerServiceWorker'

import 'tachyons'
import './index.css'

const logger = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const isDev = process.env.NODE_ENV !== 'production'
const enhancer = isDev ? composeEnhancers(applyMiddleware(promise, logger)) : applyMiddleware(promise)

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
