import React from "react";
import { shallow } from "enzyme";
import CompA from "./compA";

describe("CompA", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CompA />);
    expect(wrapper).toMatchSnapshot();
  });
});
