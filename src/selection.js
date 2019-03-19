import React from "react";
import styled from "styled-components";

import Option from "./option.js";

function Selection(props) {
  return (
    <StyledSelectionContainer>
      <Option
        name="all"
        url="https://media.wired.com/photos/5932661626780e6c04d2b642/master/pass/AdventureTime.jpg"
        handleClick={props.handleClick}
      />

      <Option
        name="finn"
        url="https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5bf3a6fd575d1ffaf4340be7/1542694655757/?format=1500w"
        handleClick={props.handleClick}
      />

      <Option
        name="jake"
        url="https://i.stack.imgur.com/xHWG8.jpg"
        handleClick={props.handleClick}
      />

      <Option
        name="lumpy"
        url="https://i.ytimg.com/vi/UlpJEVxXuQI/maxresdefault.jpg"
        handleClick={props.handleClick}
      />

      <Option
        name="bmo"
        url="https://travisthegrimm.files.wordpress.com/2014/01/bmo_with_tutorial_by_pianogirl613-d5d3xvb.png"
        handleClick={props.handleClick}
      />

      <Option
        name="princessbubblegum"
        url="http://24.media.tumblr.com/7ebed09e2b26bc7d14c7264b49180614/tumblr_n0dzdp2rND1r89gj8o1_500.png"
        handleClick={props.handleClick}
      />

      <Option
        name="marceline"
        url="https://data.whicdn.com/images/318822987/large.jpg"
        handleClick={props.handleClick}
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
