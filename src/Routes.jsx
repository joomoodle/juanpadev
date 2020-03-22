import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Screens/Home";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route component={Home} exact path="/home" />
      </Switch>
    );
  }
}

export const PrivateRoute = ({ component: Component, name, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const isLogged = localStorage.getItem("isAuthenticated") === "true";
      const myModules = JSON.parse(localStorage.getItem("_MODULES"));
      if (!isLogged) {
        return <Redirect exact from="/" to="/sign-in" />;
      }
      for (let index = 0; index < myModules.length; index++) {
        const element = myModules[index];
        if (element.name === name) {
          return <Component {...props} />;
        }
      }
      return <Redirect to="/not-found" />;
    }}
  />
);
