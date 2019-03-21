import React from "react";
import styled from "styled-components";

function Title() {
  return (
    <StyledTitle>
      <h1>Get some wisdom, dude!</h1>
    </StyledTitle>
  );
}

const StyledTitle = styled.div`
  font-family: "Kranky";
  h1 {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    font-size: 4em;
  }
`;

export default Title;
