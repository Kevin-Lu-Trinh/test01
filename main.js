import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import { Router, Route, hashHistory, IndexRoute  } from 'react-router';

import App from './App.jsx';
import About from './Components/About.js';
import Contact from './Components/Contact.js';

const router = (
    <Router history = {hashHistory}>
        <Route path = "/" component = {App}>
            <Route path ="about" component = {About}></Route>
            <Route path = "contact" component = {Contact}></Route>
        </Route>
    </Router>
);

ReactDOM.render(router, document.getElementById('app'));
