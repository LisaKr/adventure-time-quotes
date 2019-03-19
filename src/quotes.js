import React from "react";
import styled from "styled-components";
import { useAxios } from "./hooks/useAxios";
import useFilter from "./hooks/useFilter";

function Quotes(props) {
  const quotes = useAxios(
    "https://adventure-time-quote-api.glitch.me/api/quotes"
  );

  const filteredQuotes = useFilter(quotes, props.name);

  console.log("filtered quotes", filteredQuotes);

  return (
    <StyledQuotes>
      {Object.keys(filteredQuotes).map((character, id) => {
        {
          /*looping through all the characters (=keys) first*/
        }
        return (
          /*unique key is the id of the character being currently looped*/
          <div key={character} className="quoteContainer">
            {/*inside every key (name) we loop through the corresponding quotes
            belonging to this key*/}
            {quotes[character].map(quote => {
              return <p key={quote}>{quote}</p>;
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
