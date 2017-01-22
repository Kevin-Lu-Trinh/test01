import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './App.jsx'
import todoApp from './reducers/reducers'
import Home from './home.jsx'
import About from './about.jsx'
import Contact from './contacts.jsx'

let store = createStore(todoApp)

let rootElement = document.getElementById('app')

const history = syncHistoryWithStore(browserHistory, store)

render((
    <Provider store = {store}>
   <Router history = {history}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
   </Provider>
),
	
   rootElement
)

