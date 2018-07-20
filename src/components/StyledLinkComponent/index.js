import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import StyledLinkComponent from "./styles";

library.add(faCaretDown, faCaretUp);

class StyledLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    };
  }

  handleStateChange = () => {
    this.setState({ dropdown: !this.state.dropdown });
  }

  render() {
    if (this.props.item) {
      return (
        <StyledLinkComponent
          dark={this.props.dark}
          to={this.props.href}
          activeStyle={this.props.isActive}
        >
          {this.props.children}
        </StyledLinkComponent>
      );
    }

    return (
      <StyledLinkComponent
        onClick={this.handleStateChange}
        dark={this.props.dark}
        id={this.props.idLink}
        to="#"
      >
        <span style={{ paddingRight: 5 }}>
          {this.props.children}
        </span>
        {
            this.state.dropdown
              ? <FontAwesomeIcon icon="caret-up" />
              : <FontAwesomeIcon icon="caret-down" />
        }
      </StyledLinkComponent>
    );
  }
}

export default StyledLink;
