import React from "react";
import { Switch, Route } from "react-router-dom";
import SideNavbar from "Components/SideNavbar";
import TestPage from "Containers/testPage";
import { Wrapper, DashboardWrapper } from "./style";

const Dashboard = () => (
  <DashboardWrapper>
    <SideNavbar />
    <Wrapper>
      <Switch>
        <Route
          path="/project/:id" component={TestPage}
        />
        <Route path="/scorecard" component={TestPage} />
      </Switch>
    </Wrapper>
  </DashboardWrapper>
);

export default Dashboard;
