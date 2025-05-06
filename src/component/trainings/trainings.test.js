import React from "react";
import { shallow } from "enzyme";
import Trainings from "./trainings";

describe("Trainings", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Trainings />);
    expect(wrapper).toMatchSnapshot();
  });
});
