import React from "react";
import styled from "styled-components";

import Title from "./title.js";
import Selection from "./selection.js";
import Quotes from "./quotes.js";

function Body(props) {
  return (
    <StyledBody>
      <Title />
      <Selection />
      <Quotes />
    </StyledBody>
  );
}

const StyledBody = styled.div``;

export default Body;
