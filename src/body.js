import React from "react";
import styled from "styled-components";

import Title from "./title.js";
import Selection from "./selection.js";
import Quotes from "./quotes.js";

function Body(props) {
  return (
    <div>
      <Title />
      <Selection />
      <Quotes />
    </div>
  );
}

export default Body;
