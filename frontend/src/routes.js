import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

function PrivateRoute({ path: Path, component: Component, exact }) {
  return localStorage.getItem('@ONG') ? (
    <Route path={Path} exact={exact} component={Component} />
  ) : (
    <Redirect to="/" />
  );
}

PrivateRoute.defaultProps = {
  exact: false,
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

function PublicRoute({ path: Path, component: Component, exact }) {
  return localStorage.getItem('@ONG') ? (
    <Redirect to="/profile" />
  ) : (
    <Route path={Path} exact={exact} component={Component} />
  );
}

PublicRoute.defaultProps = {
  exact: false,
};

PublicRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" exact component={Logon} />
        <PublicRoute path="/register" component={Register} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
