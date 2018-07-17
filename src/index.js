import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Loadable from "@7rulnik/react-loadable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "Containers/testPage";
import Loading from "Components/LoadingPage";
import configureStore from "./store/index";
import Dashboard from "Containers/Dashboard";
import SideNavbar from "Components/SideNavbar";
import TestPage from "Containers/testPage";
import TestPage2 from "Containers/testPage";

const LoadableComponent = Loadable({
  loader: LoginPage,
  loading: Loading
});

const initialState = {};
const store = configureStore(initialState);

const Root = () => (
  <Provider store={store}>
    <div>
      <Router>
        <div>
          <SideNavbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={TestPage} />
            <Route path="/scorecard" component={TestPage2} />
          </Switch>
        </div>
      </Router>
    </div>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
