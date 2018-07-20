import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { UncontrolledCollapse, CardBody, Card } from "reactstrap";
import PropTypes from "prop-types";
import blackLogo from "Assets/gl_logo.png";
import whiteLogo from "Assets/gl_logo_white.png";
import ThemeToggler from "Components/ThemeToggler";
import Logo from "Components/Logo";
import ThemeActions from "Actions/theme.action";
import StyledLinkComp from "Components/StyledLinkComponent";
import Item from "../MenuItem";
import {
  Navigation,
  StyledLink,
  MenuContent,
  TogglerWrapper,
  MenuItem,
  ItemsWrapper
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


const stylesLink = {
  borderLeft: "2px solid #f76f39",
  paddingLeft: "0.4em"
};

const stylesItem = { borderLeft: "2px solid #f76f39" };


const SideNavbar = ({
  themeColor,
  compHeightAction
}) => (

  <Navigation>
    <MenuContent dark={themeColor}>
      {themeColor
        ? (
          <Logo
            onSize={(size) => { compHeightAction(size.height); }}
            logo={blackLogo}
            dark={themeColor}
          />
        ) : (
          <Logo
            onSize={(size) => { compHeightAction(size.height); }}
            logo={whiteLogo}
            dark={themeColor}
          />
        )}

      <ItemsWrapper>
        <StyledLinkComp dark={themeColor} idLink="home">
          Home
        </StyledLinkComp>
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

        <StyledLinkComp
          href="/scorecard" item
          dark={themeColor}
          isActive={stylesLink}
        >
          Score Card
        </StyledLinkComp>

        <StyledLinkComp dark={themeColor} idLink="settings">
        Settings
        </StyledLinkComp>
        <UncontrolledCollapse toggler="#settings">
          <Card>
            <CardBody>
              <MenuItem
                dark={themeColor}
                activeStyle={stylesItem}
                to="/usermanagment"
              >
              User Managment

              </MenuItem>
            </CardBody>
          </Card>
        </UncontrolledCollapse>

      </ItemsWrapper>
    </MenuContent>

    <TogglerWrapper dark={themeColor}>
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
  compHeightAction: height => dispatch(ThemeActions.compHeightAction(height))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNavbar));
