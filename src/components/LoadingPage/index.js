import React, { Component } from "react";
import { Wrapper, Loading } from "./styles";
import gif from "Assets/loading.gif";

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
