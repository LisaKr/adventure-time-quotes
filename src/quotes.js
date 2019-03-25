import React from "react";
import styled from "styled-components";
import useAxios from "./hooks/useAxios";
import useFilter from "./hooks/useFilter";

function Quotes(props) {
  const quotes = useAxios(
    "https://adventure-time-quote-api.glitch.me/api/quotes"
  );

  console.log(quotes);

  const filteredQuotes = useFilter(quotes, props.name);

  return (
    <StyledQuotes>
      {Object.keys(filteredQuotes).map(index => {
        /*looping through all the characters (=keys) first*/

        return (
          <div key={index} className="quoteContainer">
            {filteredQuotes[index].quotes.map(q => {
              return <p>{q}</p>;
            })}
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
    border: 1px solid black;
    margin: 0.5em;
    background: white;
    padding: 0.5em;
  }
  .quoteContainer {
    width: 60%;
    margin: 0 auto;
  }
`;

export default Quotes;
