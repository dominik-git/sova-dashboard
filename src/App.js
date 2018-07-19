import React from "react";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import Loadable from "@7rulnik/react-loadable";
import Loading from "Components/LoadingPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

library.add(faCaretDown, faCaretUp);

const LoadableComponent = Loadable({
  loader: () => import("Containers/Dashboard"),
  loading: Loading
});

const App = () => (
  <Switch>
    <Route
      path="/"
      component={LoadableComponent}
    />
  </Switch>
);
export default withRouter(App);
