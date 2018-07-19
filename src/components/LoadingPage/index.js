import React, { Component } from "react";
import gif from "Assets/loading.gif";
import { Wrapper, Loading } from "./styles";

class LoadingPage extends Component {
  render() {
    return (
      <Wrapper>
        <Loading src={gif} />
      </Wrapper>
    );
  }
}

export default LoadingPage;
