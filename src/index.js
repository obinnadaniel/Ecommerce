import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import './all.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { ProductProvider } from './context';

ReactDOM.render(<ProductProvider><Router><App /></Router></ProductProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();