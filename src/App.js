import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './containers/login/view/LoginPage';
import About from './containers/About';
import Repos from './containers/Repos';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/repos" component={Repos} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;