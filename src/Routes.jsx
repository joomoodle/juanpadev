import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Screens/Home";
import About from "./Screens/About";
import Portafolio from "./Screens/Portafolio";
import Contact from "./Screens/Contact";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portafolio" exact component={Portafolio} />
        <Route path="/contacto" exact component={Contact} />
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
