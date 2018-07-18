import React from "react";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import Dashboard from "Containers/Dashboard";
// import Loadable from "@7rulnik/react-loadable";
// const LoadableComponent = Loadable({
//   loader: LoginPage,
//   loading: Loading
// });
const App = () => (
  <Switch>
    <Route
      path="/"
      component={Dashboard}
    />
  </Switch>
);
export default withRouter(App);
