import React from "react";
import styled from "styled-components";

function Title() {
  return (
    <StyledTitle>
      <h1> Get some wisdom, dude! </h1>
    </StyledTitle>
  );
}

const StyledTitle = styled.div`
  font-family: "Kranky";
  h1 {
    width: 50%;
    margin: 0.5em auto;
    text-align: center;
    font-size: 2.5em;
  }
`;

export default Title;
