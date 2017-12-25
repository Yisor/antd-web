import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom'

import Home from './Home';
import About from './About';
import Repos from './Repos';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/repos" component={Repos} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;