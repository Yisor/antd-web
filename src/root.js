import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import DevTools from './containers/DevTools'
import Login from './containers/login/view/LoginPage';
import About from './containers/About';
import Repos from './containers/Repos';
import DeliveryAddress from './containers/address/DeliveryAddressPage';
import CalendarPage from './containers/calendar/CalendarPage';
import VerifyPage from './containers/login/view/VerifyPage';
import CaptchaPage from './containers/login/view/CaptchaPage';
import NewPasswordPage from './containers/login/view/NewPasswordPage';
import FlightOrderItem from './containers/order/FlightOrderItem';
import FlightOrder from './containers/order/FlightOrder';

const history = createHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={FlightOrder} />
        <Route path="/login" component={Login} />
        <Route path="/verify" component={VerifyPage} />
        <Route path="/captcha" component={CaptchaPage} />
        <Route path="/password" component={NewPasswordPage} />
        <Route path="/about" component={About} />
        <Route path="/repos" component={Repos} />
        <DevTools />
      </Switch>
    
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root