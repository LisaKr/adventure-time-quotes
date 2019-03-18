import React from "react";
import styled from "styled-components";
import { useQuotes } from "./hooks/useQuotes";

function Quotes(props) {
  const { quotes } = useQuotes();
  return <StyledQuotes>{quotes}</StyledQuotes>;
}

const StyledQuotes = styled.div``;

export default Quotes;
