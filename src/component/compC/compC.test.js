import React from "react";
import { shallow } from "enzyme";
import CompC from "./compC";

describe("CompC", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CompC />);
    expect(wrapper).toMatchSnapshot();
  });
});
