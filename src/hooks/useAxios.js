import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = url => {
  //in order to set state
  const [quotes, setQuotes] = useState([]);
  //function for fetching data, creating array of quotes and setting the state
  const getData = async () => {
    const { data } = await axios.get(url);

    let allQuotes = [];

    await data.forEach(el => {
      allQuotes = [...allQuotes, ...el.quotes];
    });

    setQuotes(allQuotes);
  };

  //useEffect cannot return a promise, only another function
  useEffect(() => {
    getData();
    // empty array tells useEffect to run only on mount and unmount
  }, []);

  return quotes;
};
