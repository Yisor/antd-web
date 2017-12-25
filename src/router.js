import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App';
import About from './About';
import Repos from './Repos';

class AppRouter extends Component {
  state = {}
  render() {
    return (
      <div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/repos" component={Repos} />
      </div>
    );
  }
}

export default AppRouter;