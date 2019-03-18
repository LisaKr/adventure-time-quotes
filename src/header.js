import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  img {
    width: 100%;
    height: 13em;
  }
`;

function Header(props) {
  return (
    <StyledHeader>
      <img src="https://vignette.wikia.nocookie.net/internationalbroadcasts/images/0/04/Adventure_Time_header.jpg/revision/latest?cb=20140222050741" />
    </StyledHeader>
  );
}

export default Header;
