import React from "react";
import sizeMe from "react-sizeme";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LogoWrapper, Logo } from "./styles";

const styles = { width: "100%" };

const LogoComp = ({ logo }) => (
  <LogoWrapper>
    <Link to="/">
      <Logo
        style={styles}
        src={logo}
        alt="globallogic"
      />
    </Link>

  </LogoWrapper>
);

LogoComp.propTypes = {
  logo: PropTypes.string.isRequired
};


export default sizeMe({ monitorHeight: true })(LogoComp);
