import React from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios.js";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });
