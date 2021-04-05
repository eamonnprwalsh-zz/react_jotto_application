import { shallow } from "enzyme";
import Input from "./Input";
import { findByTestAttr, checkProps } from "../../../test/testUtils";
import React from "react";

const defaultProps = {
  secretWord: "house",
};

const setup = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<Input {...setUpProps} />);
};

test("does not throw a warning against default props", () => {
  checkProps(Input, defaultProps);
});

describe("holder", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ secretWord: "cake" });
  });

  test("for existence of input component", () => {
    const inputField = findByTestAttr(wrapper, "input-component");
    expect(inputField.length).toBe(1);
  });

  test("for existence of empty input field", () => {
    const inputField = findByTestAttr(wrapper, "input-box");
    expect(inputField.text().length).toBe(0);
  });
});

describe("state controller input field", () => {
  test("setCurrentGuess called when the input field changes", () => {

    // This is a replacement function for useState
    // Below is mocking [currentGuess, setCurrentGuess] with '' and mockSetCurrentGuess
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    const wrapper = setup();

    const inputField = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputField.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
});
