import React from "react";
import styled from "styled-components";

import Option from "./option.js";

function Selection() {
  return (
    <StyledSelectionContainer>
      <Option
        name="all"
        url="https://media.wired.com/photos/5932661626780e6c04d2b642/master/pass/AdventureTime.jpg"
      />

      <Option
        name="finn"
        url="https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5bf3a6fd575d1ffaf4340be7/1542694655757/?format=1500w"
      />

      <Option name="jake" url="https://i.stack.imgur.com/xHWG8.jpg" />

      <Option
        name="lsp"
        url="https://i.ytimg.com/vi/UlpJEVxXuQI/maxresdefault.jpg"
      />
    </StyledSelectionContainer>
  );
}

const StyledSelectionContainer = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-around;
`;

export default Selection;
