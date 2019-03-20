import React, { Component } from "react";
import styled from "styled-components";
import { useState } from "react";

import "./App.css";
import Title from "./title.js";
import Selection from "./selection.js";
import Quotes from "./quotes.js";

function App(props) {
  const [name, setName] = useState("all");

  function handleClick(newName) {
    return setName(newName);
  }

  return (
    <StyledApp>
      <Title />
      <Selection handleClick={handleClick} />
      <Quotes name={name} />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  height: 100%;
  background-image: url("http://www.themesltd.com/headers2/pixel_adventure_time.png");
  background-size: 200px 100px;
  background-repeat: repeat;
`;

export default App;
