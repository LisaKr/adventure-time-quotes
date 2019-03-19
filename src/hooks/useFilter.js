import { useState, useEffect } from "react";

export default function useFilter(raw, name) {
  const [quotes, setQuotes] = useState([]);

  var filteredObject = Object.keys(raw).reduce(function(r, e) {
    if (e == name) {
      r[e] = raw[e];
    }
    return r;
  }, {});

  console.log("filt obj", filteredObject, filteredObject.length);

  useEffect(() => {
    if (
      Object.entries(filteredObject).length === 0 &&
      filteredObject.constructor === Object
    ) {
      setQuotes(raw);
    } else {
      setQuotes(filteredObject);
    }
  }, []);

  return Object.entries(filteredObject).length === 0 &&
    filteredObject.constructor === Object
    ? raw
    : filteredObject;
}
