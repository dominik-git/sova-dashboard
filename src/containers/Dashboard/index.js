import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideNavbar from "Components/SideNavbar";
import TestPage from "Containers/testPage";
import TestPage2 from "Containers/testPage";

const Dashboard = () => (
  <div>
    <SideNavbar />
    <Switch>
      <Route
        path="/project/:id" component={TestPage}
      />
      <Route path="/scorecard" component={TestPage2} />
    </Switch>
  </div>
);
export default Dashboard;
