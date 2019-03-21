import React from "react";
import ReactDOM from "react-dom";
import Option from "./Option";
// import { act } from "react-dom/test-utils";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

it("renders one img and one input", () => {
  const wrapper = mount(<Option />);
  expect(wrapper.find("img")).toHaveLength(1);
  expect(wrapper.find("input")).toHaveLength(1);
});

it("triggers props.Handleclick on click", () => {
  //a spy function
  const fakeHandleClick = jest.fn();
  //providing props for the component to work
  const wrapper = mount(<Option name={"finn"} handleClick={fakeHandleClick} />);

  //simulate click on the radio input
  wrapper.find("input").simulate("click");
  //expect it to be called with "finn"
  expect(fakeHandleClick).toBeCalledWith("finn");
});
