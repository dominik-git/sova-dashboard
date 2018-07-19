import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import MenuItem from "./styles";

const styles = { borderLeft: "2px solid #f76f39" };

const Item = ({ projectName, id, themeColor }) => (
  <MenuItem
    dark={themeColor}
    activeStyle={styles}
    exact to={`/project/${id}`}
  >
    {projectName}
  </MenuItem>
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
