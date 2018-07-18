import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Wrapper, UserIcon, Letter } from "./styles";

const TopMenu = ({ logoHeight, themeColor }) => (
  <Wrapper height={logoHeight}>
    <UserIcon
      height={logoHeight}
    >
      <Letter dark={themeColor}>
R
      </Letter>
    </UserIcon>
  </Wrapper>
);


TopMenu.propTypes = {
  logoHeight: PropTypes.number.isRequired,
  themeColor: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  logoHeight: state.themeReducer.logoHeight,
  themeColor: state.themeReducer.themeColor

});


export default connect(mapStateToProps, null)(TopMenu);
