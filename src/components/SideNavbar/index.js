import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { UncontrolledCollapse, CardBody, Card } from "reactstrap";
import PropTypes from "prop-types";
import blackLogo from "Assets/gl_logo.png";
import whiteLogo from "Assets/gl_logo_white.png";
import { Link } from "react-router-dom";
import ThemeToggler from "Components/ThemeToggler";
import Logo from "Components/Logo";
import Item from "../MenuItem";

import {
  Navigation,
  StyledLink,
  MenuContent,
  TogglerWrapper,
  MenuItem,
  ItemsWrapper
} from "./styles";
import ThemeActions from "../../redux/actions/theme.action";

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


const SideNavbar = ({ themeColor, compHeightAction }) => (

  <Navigation>
    <MenuContent dark={themeColor}>
      {themeColor
        ? (
          <Link to="/">
            <Logo
              onSize={(size) => { compHeightAction(size.height); }}
              logo={blackLogo}
            />
          </Link>
        ) : (
          <Link to="/">
            <Logo
              onSize={(size) => { compHeightAction(size.height); }}
              logo={whiteLogo}
            />
          </Link>

        )}

      <ItemsWrapper>
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
          activeStyle={{
            borderLeft: "2px solid #f76f39",
            paddingLeft: "0.3em"
          }}
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
              <MenuItem
                dark={themeColor}
                activeStyle={{ borderLeft: "2px solid #f76f39" }}
                to="/usermanagment"
              >
              User Managment
              </MenuItem>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </ItemsWrapper>
    </MenuContent>
    <TogglerWrapper dark={themeColor} style={{ alignSelf: "flex-end" }}>
      <ThemeToggler />
    </TogglerWrapper>
  </Navigation>
);

SideNavbar.propTypes = {
  themeColor: PropTypes.bool.isRequired,
  compHeightAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor,
  logoHeight: state.themeReducer.logoHeight
});

const mapDispatchToProps = dispatch => ({
  compHeightAction: randomString => dispatch(ThemeActions.compHeightAction(randomString))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNavbar));
