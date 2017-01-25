import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import { Router, Route, hashHistory, IndexRoute  } from 'react-router';

import App from './App.jsx';
import About from './Components/About.js';
import Contact from './Components/Contact.js';

import { history } from './store.js';
import store from './store.js';
import { Provider } from 'react-redux';

const router = (
    <Provider store = {store}>
    <Router history = {hashHistory}>
        <Route path = "/" component = {App}>
            <Route path ="about" component = {About}></Route>
            <Route path = "contact" component = {Contact}></Route>
        </Route>
    </Router>
    </Provider>
);

ReactDOM.render(router, document.getElementById('app'));

//reset

/*

<script src="https://unpkg.com/react@15.3.2/dist/react.js"></script>
      <script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
      
      <style> 
        #container {
            padding: 50px;
            background-color: #FFF;
        }
     </style>

*/