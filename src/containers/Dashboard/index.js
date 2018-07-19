import React from "react";
import { Switch, Route } from "react-router-dom";
import theme from "../../styles/themes/default";
import { ThemeProvider } from "styled-components";
import SideNavbar from "Components/SideNavbar";
import TestPage from "Containers/testPage";
import { Wrapper, DashboardWrapper } from "./style";

const Dashboard = () => (
  <ThemeProvider theme={theme}>
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
 </ThemeProvider>
);

export default Dashboard;
