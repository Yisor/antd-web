import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import About from './About';
import Repos from './Repos';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/repos" component={Repos} />
    </div>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
