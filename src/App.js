import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";

import Header from "./header.js";
import Body from "./body.js";

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Body />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  height: 100%;
  background-image: url("http://www.themesltd.com/headers2/pixel_adventure_time.png");
  background-size: 200px 100px;
  background-repeat: repeat;
`;

export default App;
