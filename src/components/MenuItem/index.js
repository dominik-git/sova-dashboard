import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import MenuItem from "./styles";

const Item = ({ projectName, id }) => (
  <NavLink
    activeStyle={{
      fontWeight: "bold",
      color: "red"
    }}

    exact to={`/project/${id}`}
  >
    {projectName}
  </NavLink>
);

Item.propTypes = {
  projectName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  themeColor: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor
});


export default withRouter(connect(mapStateToProps)(Item));
