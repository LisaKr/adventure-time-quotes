import { useState, useEffect } from "react";

export default function useFilter(raw, name) {
  const [value, setValue] = useState({});

  //filtering object to only keep the key which is passed as name, empty object in the end is the initial value, callback is holding value for every iteration
  var filteredObject = Object.keys(raw).reduce(function(r, e) {
    if (e === name) {
      r[e] = raw[e];
    }
    return r;
  }, {});

  //every time the page re-renders because quotes or props name changed, this effect will run. if the filter yielded nothing (meaning everyone is selected, then the object is not filtered)
  useEffect(
    () => {
      if (
        Object.entries(filteredObject).length === 0 &&
        filteredObject.constructor === Object
      ) {
        setValue(raw);
      } else {
        setValue(filteredObject);
      }
    },
    [raw, name]
  );

  return value;
}
