import React from "react";
import styled from "styled-components";

function Option(props) {
  return (
    <StyledOption>
      <img src={props.url} alt="avatar" />
      <input
        type="radio"
        name="character"
        value={props.name}
        onClick={() => {
          props.handleClick(props.name);
        }}
      />
    </StyledOption>
  );
}

const StyledOption = styled.div`
  img {
    height: 100px;
    border-radius: 100%;
    border: 1px solid black;
  }

  input {
    transform: scale(2);
  }
`;

export default Option;
