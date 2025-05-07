import React from "react";
import { shallow } from "enzyme";
import CompB from "./compB";

describe("CompB", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CompB />);
    expect(wrapper).toMatchSnapshot();
  });
});
