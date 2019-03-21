import React from "react";
import ReactDOM from "react-dom";
import Title from "./Title";
// import { act } from "react-dom/test-utils";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

it("can render the title component", () => {
  // let container = document.createElement("div");
  // document.body.appendChild(container);
  // act(() => {
  //   ReactDOM.render(<Title />, container);
  // });
  const wrapper = mount(<Title />);
  const h1 = wrapper.find("h1");
  expect(h1.text()).toBe("Get some wisdom, dude!");
});
