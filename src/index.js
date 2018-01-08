import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import App from './App'

import './index.css';

ReactDOM.render((
	<BrowserRouter>
  		<App />
  	</BrowserRouter>
  ), document.getElementById('root')
);