import React from "react";
import styled from "styled-components";
import { useState } from "react";

import Title from "./title.js";
import Selection from "./selection.js";
import Quotes from "./quotes.js";

function Body(props) {
  const [name, setName] = useState("all");

  function handleClick(newName) {
    console.log("clicked!!", newName);
    return setName(newName);
  }

  return (
    <StyledBody>
      <Title />
      <Selection handleClick={handleClick} />
      <Quotes name={name} />
    </StyledBody>
  );
}

const StyledBody = styled.div``;

export default Body;
