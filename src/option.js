import React from "react";
import styled from "styled-components";

function Option(props) {
  return (
    <StyledOption>
      <img src={props.url} />
      <input type="radio" name="character" value={props.name} />
    </StyledOption>
  );
}

const StyledOption = styled.div`
  img {
    height: 60px;
    border-radius: 100%;
    border: 1px solid black;
  }

  input {
    transform: scale(2);
  }
`;

export default Option;
