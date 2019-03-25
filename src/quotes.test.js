import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { act } from "react-dom/test-utils";

import Quotes from "./quotes.js";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("axios");

describe("quotes", () => {
  test("should return 8 quotes for bmo", async () => {
    const flushPromises = () => new Promise(resolve => setImmediate(resolve));

    const wrapper = mount(<Quotes name={"bmo"} />);

    await flushPromises();
    act(() => {
      wrapper.update();
    });

    const p = wrapper.find("p");
    expect(p.length).toEqual(4);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
