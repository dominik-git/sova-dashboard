import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { UncontrolledCollapse, CardBody, Card } from "reactstrap";
import PropTypes from "prop-types";
import blackLogo from "Assets/gl_logo.png";
import whiteLogo from "Assets/gl_logo_white.png";
import { Link } from "react-router-dom";
import ThemeToggler from "Components/ThemeToggler";
import Item from "../MenuItem";

import {
  Navigation,
  Logo,
  LogoWrapper,
  StyledLink,
  MenuContent,
  TogglerWrapper,
  MenuItem
} from "./styles";

const ab = [
  {
    name: "Some project",
    id: 1
  },
  {
    name: "Another project",
    id: 2
  }
];

const SideNavbar = ({ themeColor }) => (
  <Navigation>
    <MenuContent dark={themeColor}>
      <LogoWrapper>
        <Link to="/">
          {themeColor ? <Logo src={blackLogo} /> : <Logo src={whiteLogo} />}
        </Link>
      </LogoWrapper>

      <StyledLink
        dark={themeColor} id="home"
        to="#"
      >
        Home
      </StyledLink>

      <UncontrolledCollapse toggler="#home">
        <Card>
          {ab.map(item => (
            <CardBody key={item.id}>
              <Item
                dark={themeColor} id={item.id}
                projectName={item.name}
              />
            </CardBody>
          ))}
        </Card>
      </UncontrolledCollapse>

      <StyledLink
        dark={themeColor} id="scoreCard"
        to="/scorecard"
      >
        Score Card
      </StyledLink>

      <StyledLink
        dark={themeColor} id="settings"
        to="#"
      >
        Settings
      </StyledLink>
      <UncontrolledCollapse toggler="#settings">
        <Card>
          <CardBody>
            <MenuItem dark={themeColor} to="/usermanagment">
              User Managment
            </MenuItem>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </MenuContent>
    <TogglerWrapper dark={themeColor} style={{ alignSelf: "flex-end" }}>
      <ThemeToggler />
    </TogglerWrapper>
  </Navigation>
);

SideNavbar.propTypes = {
  themeColor: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor
});


export default withRouter(connect(mapStateToProps)(SideNavbar));
