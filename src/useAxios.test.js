import React from "react";
import ReactDOM from "react-dom";
import { cleanup, act, testHook } from "react-testing-library";

import useAxios from "./hooks/useAxios";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

// describe("useAxios", () => {
//   test("should have a getData function", () => {
//     //a test helper that wraps your custom hook in a component, but exposes what is returned from your hook to your test
//     let value;
//     //wrap the call to useCounter in a callback funtion passed to testHook
//     testHook(
//       () =>
//         ({ value } = useAxios(
//           "https://adventure-time-quote-api.glitch.me/api/quotes"
//         ))
//     );
//
//     expect(typeof value).toBe("object");
//   });
// });
