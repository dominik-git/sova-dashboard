import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import StyledLinkComponent from "Components/StyledLinkComponent";
import { withRouter } from "react-router";
import theme from "../../styles/themes/default";

import {
  Wrapper, LinkWrapper
} from "./styles";

const activeClass = {
  background: theme.neutralColor.orange,
  color: "white",
  fontSize: "1.2em"
};

const TopMenu = ({
  logoHeight, themeColor
}) => (
  <Wrapper height={logoHeight}>

    <LinkWrapper height={logoHeight}>
      <StyledLinkComponent
        href="/reliability" item
        dark={themeColor} isActive={activeClass}
      >
          Reliability
      </StyledLinkComponent>
    </LinkWrapper>

    <LinkWrapper height={logoHeight}>
      <StyledLinkComponent
        href="/velocity" item
        dark={themeColor} isActive={activeClass}
      >
          Velocity
      </StyledLinkComponent>
    </LinkWrapper>

    <LinkWrapper height={logoHeight}>
      <StyledLinkComponent
        href="/resource" item
        dark={themeColor} isActive={activeClass}
      >
          Resource
      </StyledLinkComponent>
    </LinkWrapper>

    <LinkWrapper height={logoHeight}>
      <StyledLinkComponent
        href="/training" item
        dark={themeColor}
        isActive={activeClass}
      >
          Training
      </StyledLinkComponent>
    </LinkWrapper>
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

export default withRouter(connect(mapStateToProps, null)(TopMenu));
