import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = url => {
  //in order to set state
  const [value, setValue] = useState([]);
  //function for fetching data, creating array of quotes and setting the state
  const getData = async () => {
    const { data } = await axios.get(url);
    //data comes back as an array, I want to have it as an object though

    let obj = {};
    await data.forEach(el => {
      obj[el.name] = el.quotes;
    });
    //setting it to state, so that there is a value to return
    setValue(obj);
  };

  //useEffect cannot return a promise, only another function
  useEffect(() => {
    getData();
    // empty array tells useEffect to run only on mount and unmount
  }, []);

  //value is not an empty array anymore, but it was set to state in the getData function
  return value;
};
