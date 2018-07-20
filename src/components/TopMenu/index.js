import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { UncontrolledCollapse, Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeAction from "Actions/theme.action";
import {
  Wrapper, UserIcon, Letter, Logout
} from "./styles";

const TopMenu = ({
  logoHeight, themeColor, logout, logoutAction
}) => (
  <Wrapper height={logoHeight}>
    <UserIcon
      height={logoHeight}
    >
      <Letter
        dark={themeColor}
        id="logout"
        onClick={() => logoutAction(!logout)}
      >
        <span style={{ paddingRight: 5 }}>
Hello Dominik
        </span>
        {
          logout
            ? <FontAwesomeIcon icon="caret-up" />
            : <FontAwesomeIcon icon="caret-down" />
        }

      </Letter>

      <UncontrolledCollapse toggler="#logout">
        <Card>
          <Logout dark={themeColor}>
            Logout
          </Logout>
        </Card>
      </UncontrolledCollapse>

    </UserIcon>
  </Wrapper>
);


TopMenu.propTypes = {
  logoHeight: PropTypes.number.isRequired,
  themeColor: PropTypes.bool.isRequired,
  logout: PropTypes.bool.isRequired,
  logoutAction: PropTypes.func.isRequired

};

const mapStateToProps = state => ({
  logoHeight: state.themeReducer.logoHeight,
  themeColor: state.themeReducer.themeColor,
  logout: state.themeReducer.logout
});

const mapDispatchToProps = dispatch => ({
  logoutAction: icon => dispatch(ThemeAction.logoutAction(icon))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);
