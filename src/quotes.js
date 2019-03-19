import React from "react";
import styled from "styled-components";
import { useAxios } from "./hooks/useAxios";

function Quotes(props) {
  const quotes = useAxios(
    "https://adventure-time-quote-api.glitch.me/api/quotes"
  );

  return (
    <StyledQuotes>
      {quotes.map((q, index) => {
        console.log(index, q);
        return (
          <div key={index} className="quoteContainer">
            <p>{q}</p>
          </div>
        );
      })}
    </StyledQuotes>
  );
}

const StyledQuotes = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 400px;
  overflow: scroll;
  font-size: 1.4em;
  font-weight: 800;
  text-align: center;
  margin-top: 3em;
  p {
    border: 5px solid black;
    margin: 0.5em;
    background: white;
  }
  .quoteContainer {
    width: 60%;
    margin: 0 auto;
  }
`;

export default Quotes;
