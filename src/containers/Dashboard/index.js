import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SideNavbar from "Components/SideNavbar";
import TestPage from "Containers/testPage";
import TopMenu from "Components/TopMenu";

import { Wrapper, DashboardWrapper } from "./style";


const Dashboard = ({ themeColor }) => (

  <DashboardWrapper>
    <SideNavbar />

    <Wrapper dark={themeColor}>
      <TopMenu />
      <Switch>
        <Route path="/project/:id" component={TestPage} />
        <Route path="/scorecard" component={TestPage} />
      </Switch>
    </Wrapper>
  </DashboardWrapper>

);


Dashboard.propTypes = {
  themeColor: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor
});


export default connect(mapStateToProps, null)(Dashboard);
