import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { UncontrolledCollapse, Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeActions from "Actions/theme.action";
import {
  Wrapper, UserIcon, Letter, Logout
} from "./styles";

const TopMenu = ({
  logoHeight, themeColor, upDown, upDownAction
}) => (
  <Wrapper height={logoHeight}>
    <UserIcon
      onClick={() => upDownAction(!upDown)}
      height={logoHeight}
    >
      <Letter
        dark={themeColor}
        id="logout"
      >
        <span style={{ paddingRight: 5 }}>
Hello Dominik
        </span>
        {
          upDown
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
  upDown: PropTypes.bool.isRequired,
  upDownAction: PropTypes.func.isRequired

};

const mapStateToProps = state => ({
  logoHeight: state.themeReducer.logoHeight,
  themeColor: state.themeReducer.themeColor,
  upDown: state.themeReducer.upDown
});

const mapDispatchToProps = dispatch => ({
  upDownAction: icon => dispatch(ThemeActions.upDownAction(icon))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);
