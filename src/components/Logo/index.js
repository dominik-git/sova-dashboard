import React from "react";
import sizeMe from "react-sizeme";
import PropTypes from "prop-types";

import { LogoWrapper, Logo } from "./styles";


const LogoComp = ({ logo }) => (
  <LogoWrapper>
    <Logo
      style={{ width: "100%" }}
      src={logo}
      alt="globallogic"
    />
  </LogoWrapper>
);

LogoComp.propTypes = {
  logo: PropTypes.string.isRequired
};


export default sizeMe({ monitorHeight: true })(LogoComp);
