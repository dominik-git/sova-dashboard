import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MenuItem from "./styles";

const Item = ({ projectName, id, themeColor }) => (
  <MenuItem dark={themeColor} to={`/project/${id}`}>
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

export default connect(
  mapStateToProps,
  null
)(Item);