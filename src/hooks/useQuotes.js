import { useState, useEffect } from "react";
import axios from "axios";

export const useQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  //function that gets data from api and concats all the quotes into one array
  const getData = async () => {
    const { data } = await axios.get(
      "https://adventure-time-quote-api.glitch.me/api/quotes"
    );

    let allQuotes = [];
    data.forEach(el => {
      allQuotes = [...allQuotes, ...el.quotes];
    });

    setQuotes(allQuotes);
  }; //getData ends here

  useEffect(() => {
    getData();
  });

  return {
    quotes
  };
};
